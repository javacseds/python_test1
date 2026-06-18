import os

# Update index.html
html_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update College Name globally
html = html.replace("Gowthami Institute of Technology and Management for Women-Autonomous", "Gouthami Institute of Technology and Management for Women")
html = html.replace("Gowthami Institute of Technology", "Gouthami Institute of Technology and Management for Women")

# 2. Inject Chart.js
if "Chart.js" not in html:
    html = html.replace(
        "<!-- html2pdf JS -->", 
        "<!-- Chart JS -->\n<script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n<!-- html2pdf JS -->"
    )

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Updated index.html")


# Update app.js
js_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

# 1. Update College Name in JS report
js = js.replace("Gowthami Institute of Technology", "Gouthami Institute of Technology and Management for Women")

# 2. Add Auto-Grading Engine and submit interception
# We need to change the confirm-submit-btn logic to grade first, then save.
# Let's write a patch for the submit logic.

submit_patch = """
document.getElementById('confirm-submit-btn').addEventListener('click', async () => {
    clearInterval(timerInterval);
    document.getElementById('submit-modal').classList.remove('active');
    
    // Show grading loader
    document.getElementById('loader').classList.remove('hidden');
    document.querySelector('.loader-text').textContent = "Auto-Grading in Progress...";
    
    saveCurrent();
    
    // Auto Grade
    let earnedMarks = 0;
    for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].trim();
        if (!codeToTest) continue; // 0 marks
        
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        if (!q.samples || q.samples.length === 0) continue;
        
        let sampleInput = q.samples[0].input;
        let expectedOutput = q.samples[0].output.trim();
        
        // Run code with sample input
        try {
            window.stdinLines = sampleInput ? sampleInput.split('\\n') : [];
            let stdoutBuffer = "";
            let isolatedPyodide = await loadPyodide({
                stdin: () => {
                    if (window.stdinLines && window.stdinLines.length > 0) {
                        return window.stdinLines.shift() + '\\n';
                    }
                    return '\\n';
                },
                stdout: (t) => { stdoutBuffer += t + '\\n'; },
                stderr: (t) => {} // ignore stderr for grading
            });
            
            // Mock stdin in Python space too just in case
            await isolatedPyodide.runPythonAsync(`
import sys
import io
class DOMStdin(io.StringIO):
    def __init__(self, lines):
        super().__init__()
        self._lines = lines
    def readline(self, size=-1):
        if self._lines:
            return self._lines.pop(0) + '\\n'
        return ''
from js import window
sys.stdin = DOMStdin(list(window.stdinLines))
            `);
            
            await isolatedPyodide.runPythonAsync(codeToTest);
            let actualOutput = stdoutBuffer.trim();
            if (actualOutput === expectedOutput || actualOutput.includes(expectedOutput)) {
                earnedMarks += 10;
            }
        } catch (err) {
            // Error means 0 marks for this question
        }
    }
    
    document.getElementById('loader').classList.add('hidden');
    
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('submitted-screen').style.display = 'flex';
    document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
    document.getElementById('submit-summary').textContent = `Questions attempted: ${attempted.filter(Boolean).length} / 5 · Marks: ${earnedMarks} / 50`;
    
    // Save to local storage
    saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED");
});
"""

# We must remove the existing confirm-submit-btn logic.
import re
js = re.sub(r"document\.getElementById\('confirm-submit-btn'\)\.addEventListener\('click', \(\) => \{.*?\}\);", submit_patch, js, flags=re.DOTALL)

# Also update triggerTimeout
timeout_patch = """
async function triggerTimeout() {
  saveCurrent();
  examScreen.style.display    = 'none';
  
  // Grade before timeout screen
  document.getElementById('loader').classList.remove('hidden');
  document.querySelector('.loader-text').textContent = "Auto-Grading in Progress...";
  
  let earnedMarks = 0;
  for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i].trim();
        if (!codeToTest) continue; // 0 marks
        
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];
        if (!q.samples || q.samples.length === 0) continue;
        
        let sampleInput = q.samples[0].input;
        let expectedOutput = q.samples[0].output.trim();
        
        try {
            window.stdinLines = sampleInput ? sampleInput.split('\\n') : [];
            let stdoutBuffer = "";
            let isolatedPyodide = await loadPyodide({
                stdin: () => {
                    if (window.stdinLines && window.stdinLines.length > 0) return window.stdinLines.shift() + '\\n';
                    return '\\n';
                },
                stdout: (t) => { stdoutBuffer += t + '\\n'; },
                stderr: (t) => {}
            });
            await isolatedPyodide.runPythonAsync(`
import sys, io
from js import window
sys.stdin = io.StringIO("\\n".join(list(window.stdinLines)) + "\\n")
            `);
            await isolatedPyodide.runPythonAsync(codeToTest);
            let actualOutput = stdoutBuffer.trim();
            if (actualOutput === expectedOutput || actualOutput.includes(expectedOutput)) {
                earnedMarks += 10;
            }
        } catch (err) {}
  }
  
  document.getElementById('loader').classList.add('hidden');
  timeoutScreen.style.display = 'flex';
  document.getElementById('timeout-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
  document.getElementById('timeout-summary').textContent = `Questions attempted: ${attempted.filter(Boolean).length} / 5 · Marks: ${earnedMarks} / 50`;
  saveResultToLocal(currentStudent.roll, attempted.filter(Boolean).length, earnedMarks, "SUBMITTED");
}
"""
js = re.sub(r"function triggerTimeout\(\) \{.*?\n\}", timeout_patch, js, flags=re.DOTALL)

# 3. Update saveResultToLocal and renderAdmin
admin_patch = """
// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD, ANALYTICS & PDF REPORTS
// ═══════════════════════════════════════════════════════
function saveResultToLocal(roll, attemptedCount, marks, status) {
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  results[roll] = {
    marks: marks,
    attempts: attemptedCount,
    status: status || "SUBMITTED",
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('assessment_results', JSON.stringify(results));
}

window.markAbsent = function(roll) {
  if (confirm("Mark student " + roll + " as ABSENT? They will not be able to login.")) {
      saveResultToLocal(roll, 0, 0, "ABSENT");
      renderAdmin();
  }
};

let chartInstance1 = null;
let chartInstance2 = null;

function renderAdmin() {
  const tbody = document.getElementById('admin-tbody');
  tbody.innerHTML = '';
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  
  // 1. Calculate Analytics
  let branchStats = {};
  let totalPass = 0;
  let totalFail = 0;
  let totalAbsent = 0;
  
  students.forEach((s) => {
    if (!branchStats[s.branch]) {
      branchStats[s.branch] = { total: 0, submitted: 0, totalMarks: 0, absent: 0 };
    }
    branchStats[s.branch].total++;
    
    if (results[s.roll]) {
      if (results[s.roll].status === "ABSENT") {
         branchStats[s.branch].absent++;
         totalAbsent++;
      } else {
         branchStats[s.branch].submitted++;
         branchStats[s.branch].totalMarks += results[s.roll].marks;
         if (results[s.roll].marks >= 25) totalPass++;
         else totalFail++;
      }
    }
  });

  // Render Analytics HTML
  const analyticsDiv = document.getElementById('admin-analytics');
  let analyticsHTML = `
    <div style="flex:2;display:flex;gap:20px;flex-wrap:wrap;">
  `;
  let labels = [];
  let avgData = [];

  for (let branch in branchStats) {
    let stat = branchStats[branch];
    let avg = stat.submitted > 0 ? (stat.totalMarks / stat.submitted).toFixed(1) : 0;
    labels.push(branch);
    avgData.push(avg);

    analyticsHTML += `
      <div style="flex:1;min-width:200px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center;">
        <div style="font-family:'Space Mono',monospace;color:var(--accent2);font-size:14px;margin-bottom:12px;">${branch} ANALYSIS</div>
        <div style="display:flex;justify-content:space-between;gap:12px;font-size:13px;color:var(--muted);">
          <div>
             <div style="font-size:24px;color:var(--text);font-weight:700;">${stat.total}</div>
             <div>Total</div>
          </div>
          <div>
             <div style="font-size:24px;color:#34d399;font-weight:700;">${stat.submitted}</div>
             <div>Submitted</div>
          </div>
          <div>
             <div style="font-size:24px;color:var(--blue-light);font-weight:700;">${avg}</div>
             <div>Avg Marks</div>
          </div>
        </div>
      </div>
    `;
  }
  
  analyticsHTML += `
    </div>
    <div style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;align-items:center;">
        <canvas id="branchChart" style="max-height:150px;"></canvas>
    </div>
    <div style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;align-items:center;">
        <canvas id="statusChart" style="max-height:150px;"></canvas>
    </div>
  `;
  analyticsDiv.innerHTML = analyticsHTML;

  // Render Charts
  setTimeout(() => {
    const ctx1 = document.getElementById('branchChart').getContext('2d');
    if (chartInstance1) chartInstance1.destroy();
    chartInstance1 = new Chart(ctx1, {
        type: 'bar',
        data: { labels: labels, datasets: [{ label: 'Avg Marks', data: avgData, backgroundColor: '#3b82f6' }] },
        options: { plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false }
    });

    const ctx2 = document.getElementById('statusChart').getContext('2d');
    if (chartInstance2) chartInstance2.destroy();
    chartInstance2 = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: ['Pass', 'Fail', 'Absent', 'Pending'], datasets: [{ data: [totalPass, totalFail, totalAbsent, students.length - (totalPass+totalFail+totalAbsent)], backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#374151'], borderWidth: 0 }] },
        options: { plugins: { legend: { position: 'right', labels: { color: '#ccc' } } }, responsive: true, maintainAspectRatio: false }
    });
  }, 100);
  
  // 2. Render Table
  students.forEach((s, i) => {
    const res = results[s.roll];
    const isSub = !!res;
    const isAbs = res && res.status === 'ABSENT';
    
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    tr.style.transition = 'background 0.2s';
    tr.onmouseover = () => tr.style.background = 'rgba(255,255,255,0.02)';
    tr.onmouseout = () => tr.style.background = 'transparent';
    
    let statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(245,158,11,0.15);color:#fbbf24;">PENDING</span>`;
    if (isAbs) {
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(239,68,68,0.15);color:#ef4444;">ABSENT</span>`;
    } else if (isSub) {
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(16,185,129,0.15);color:#34d399;">SUBMITTED</span>`;
    }

    tr.innerHTML = `
      <td style="padding:14px 20px;color:var(--muted2);">${i + 1}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;color:var(--text);">${s.roll}</td>
      <td style="padding:14px 20px;color:var(--text);">${s.name}</td>
      <td style="padding:14px 20px;color:var(--muted);">${s.branch}</td>
      <td style="padding:14px 20px;">${statusBadge}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;font-weight:700;color:${isSub && !isAbs ? 'var(--text)' : 'var(--muted2)'};">
        ${isSub && !isAbs ? res.marks + ' / 50' : '-'}
      </td>
      <td style="padding:14px 20px;">
        ${!isSub ? `<button class="clear-btn" style="padding:4px 12px;font-size:12px;border-color:var(--red);color:var(--red);margin-right:8px;" onclick="markAbsent('${s.roll}')">Absent</button>` : ''}
        ${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 12px;font-size:12px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">View Report</button>` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function getSystemDateString() {
    const d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

window.viewStudentReport = function(roll) {
    const student = students.find(x => x.roll === roll);
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    const res = results[roll];
    
    const content = document.getElementById('student-report-content');
    
    let html = `
        <div style="text-align:center;margin-bottom:20px;border-bottom:2px solid #eee;padding-bottom:15px;">
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gouthami Institute of Technology and Management for Women</h2>
            <p style="margin:4px 0 0 0;color:#666;font-size:14px;">Python Lab Assessment - Individual Report</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
            <tr><td style="padding:8px 0;color:#666;width:40%;">Student Name</td><td style="font-weight:700;">${student.name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Roll Number</td><td style="font-weight:700;font-family:'Space Mono',monospace;">${student.roll}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Branch</td><td style="font-weight:700;">${student.branch}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Status</td><td style="font-weight:700;color:${res ? '#059669' : '#d97706'};">${res ? 'Submitted' : 'Pending'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:18px;">${res ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res ? res.attempts + ' / 5' : 'N/A'}</td></tr>
        </table>
        <div style="margin-top:30px;font-size:12px;color:#888;text-align:right;">
            Generated on: ${getSystemDateString()}
        </div>
    `;
    
    content.innerHTML = html;
    document.getElementById('student-report-modal').classList.add('active');
};
"""

js = re.sub(r"// ═══════════════════════════════════════════════════════\n//  ADMIN DASHBOARD.*?(?=document\.getElementById\('close-report-btn'\))", admin_patch, js, flags=re.DOTALL)

# Block copy paste in editor, block absent students, and Ctrl+Shift+X listener
additions = """
// --- ANTI-CHEAT & SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    // Ctrl + Shift + X => Force Submit
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'x') {
        if (examScreen.style.display !== 'none') {
            document.getElementById('confirm-submit-btn').click();
        }
    }
});

// Block copy/paste globally on the exam screen
document.getElementById('exam-screen').addEventListener('copy', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('cut', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('paste', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('contextmenu', e => e.preventDefault());

// Also update CodeMirror setup inside DOMContentLoaded
"""
# Replace CodeMirror setup
cm_setup = """
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "python",
        theme: "material-ocean",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentWithTabs: false,
        dragDrop: false
    });
"""
js = re.sub(r"editor = CodeMirror\.fromTextArea.*?\}\);", cm_setup, js, flags=re.DOTALL)

# Update Login Logic to block absent
login_patch = """
function attemptLogin() {
  const roll = rollInput.value.trim().toUpperCase();
  if (roll === 'ADMIN') {
    loginError.style.display = 'none';
    loginScreen.style.display = 'none';
    document.getElementById('admin-screen').style.display = 'flex';
    renderAdmin();
    return;
  }
  const student = studentMap[roll];
  if (!student) { loginError.textContent = "⚠ Roll number not found."; loginError.style.display = 'block'; rollInput.focus(); return; }
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  if (results[roll] && results[roll].status === "ABSENT") {
      loginError.textContent = "⚠ Exam has been deactivated for this student (Marked Absent).";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }
  if (results[roll] && results[roll].status === "SUBMITTED") {
      loginError.textContent = "⚠ This student has already submitted the exam.";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }

  loginError.style.display = 'none';
  startExam(student);
}
"""
js = re.sub(r"function attemptLogin\(\) \{.*?\n\}", login_patch, js, flags=re.DOTALL)

# Ensure Anti-Cheat JS is appended
js += additions

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js)

print("Massive update complete!")
