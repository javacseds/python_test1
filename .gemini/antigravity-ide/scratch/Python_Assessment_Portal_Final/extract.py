import re

with open(r"C:\Users\Rangaswamy Kadapa\Downloads\lab_exam_portal.html", "r", encoding="utf-8") as f:
    content = f.read()

script_match = re.search(r'<script>\n(.*?)<\/script>', content, re.DOTALL)
if script_match:
    script_content = script_match.group(1)
    
    idx = script_content.find("async function runCode()")
    if idx != -1:
        base = script_content[:idx]
    else:
        base = script_content

    # Patch saveCurrent
    base = base.replace(
        "codes[currentTab]  = document.getElementById('code-editor').value;",
        "if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }"
    )
    
    # Patch switchTab
    base = base.replace(
        "document.getElementById('code-editor').value  = codes[i];",
        "if (typeof editor !== 'undefined') { editor.setValue(codes[i]); } setTimeout(() => editor.refresh(), 10);"
    )
    
    # Remove old input listener
    base = re.sub(
        r"// Track changes for attempt detection.*?}\);\n",
        "",
        base,
        flags=re.DOTALL
    )

    # Append perfectly clean Pyodide and new logic
    pyodide_logic = """
// ═══════════════════════════════════════════════════════
//  NEW PYODIDE & CODEMIRROR LOGIC
// ═══════════════════════════════════════════════════════
let pyodideInstance;
let editor;

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Setup CodeMirror
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "python",
        theme: "material-ocean",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentWithTabs: false
    });

    editor.on('change', () => {
        const val = editor.getValue().trim();
        if (val) {
            attempted[currentTab] = true;
            document.getElementById(`tab-${currentTab}`).classList.add('solved');
            updateProgress();
        }
    });

    // 2. Load Pyodide
    try {
        window.stdinLines = [];
        pyodideInstance = await loadPyodide({
            stdin: () => {
                if (window.stdinLines && window.stdinLines.length > 0) {
                    return window.stdinLines.shift() + '\\n';
                }
                return '\\n';
            },
            stdout: (text) => { appendToConsole(text, false); },
            stderr: (text) => { appendToConsole(text, true); }
        });
        document.getElementById('loader').classList.add('hidden');
    } catch (err) {
        alert("Failed to load Secure Python Environment: " + err.message);
    }
});

function appendToConsole(text, isError) {
    const consoleDiv = document.getElementById('output-console');
    if (consoleDiv.textContent === '// Running…' || consoleDiv.textContent === '// Run your code to see output here') {
        consoleDiv.textContent = '';
    }
    const span = document.createElement('span');
    span.textContent = text + '\\n';
    if (isError) { span.className = 'err-text'; }
    consoleDiv.appendChild(span);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

document.getElementById('run-btn').addEventListener('click', async () => {
    saveCurrent();
    const code = editor.getValue();
    if (!code.trim()) return;

    const runBtn = document.getElementById('run-btn');
    const spinner = document.getElementById('run-spinner');
    const oc = document.getElementById('output-console');
    const os = document.getElementById('output-status');

    runBtn.disabled = true;
    spinner.style.display = 'inline-block';
    oc.textContent = '// Running…';
    oc.classList.remove('err-text');
    os.style.display = 'none';

    // Set up standard input buffer from the textarea
    let rawInput = document.getElementById('stdin-input').value;
    window.stdinLines = rawInput ? rawInput.split('\\n') : [];

    try {
        await pyodideInstance.runPythonAsync(code);
        
        // If nothing was printed, show OK
        if (oc.textContent === '// Running…') {
            oc.textContent = '';
        }
        
        os.textContent = 'OK';
        os.className = 'output-status ok';
    } catch (err) {
        if (err.message && err.message.includes('PythonError')) {
            appendToConsole(err.message, true);
        } else {
            console.error("Execution error:", err);
            appendToConsole(err.message, true);
        }
        os.textContent = 'ERROR';
        os.className = 'output-status err';
    } finally {
        os.style.display = 'inline-block';
        runBtn.disabled = false;
        spinner.style.display = 'none';
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    if (confirm('Clear the editor for this question?')) {
        editor.setValue('');
        codes[currentTab] = '';
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
});

document.getElementById('open-submit-modal-btn').addEventListener('click', () => {
    saveCurrent();
    const att = attempted.filter(Boolean).length;
    document.getElementById('modal-attempt-info').textContent =
      `${att} of 5 questions attempted · Estimated marks: ${att * 10} / 50`;
    document.getElementById('submit-modal').classList.add('active');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('submit-modal').classList.remove('active');
});

document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    document.getElementById('submit-modal').classList.remove('active');
    saveCurrent();
    const att = attempted.filter(Boolean).length;
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('submitted-screen').style.display = 'flex';
    document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
    document.getElementById('submit-summary').textContent = `Questions attempted: ${att} / 5 · Marks: ${att * 10} / 50`;
});

// Close modal on overlay click
document.getElementById('submit-modal').addEventListener('click', function(e) {
  if (e.target === this) document.getElementById('submit-modal').classList.remove('active');
});
"""
    
    with open(r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js", "w", encoding="utf-8") as out:
        out.write(base)
        out.write(pyodide_logic)
        
    print("Patched app.js successfully!")
else:
    print("Could not find script tag")
