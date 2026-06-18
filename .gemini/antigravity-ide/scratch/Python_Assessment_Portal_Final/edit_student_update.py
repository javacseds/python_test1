import os
import re

html_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\index.html"
js_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"

# --- 1. Update index.html ---
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

edit_modal = """
<!-- Edit Student Modal -->
<div class="modal-overlay" id="edit-student-modal">
    <div class="modal-card" style="max-width:400px;">
        <h3 style="margin-bottom:15px;color:var(--text);">Edit Student Details</h3>
        <input type="hidden" id="edit-original-roll">
        <div style="margin-bottom:15px;text-align:left;">
            <label style="display:block;margin-bottom:5px;font-size:12px;color:var(--muted);">Roll Number</label>
            <input type="text" id="edit-roll-input" style="width:100%;padding:10px;background:var(--navy3);border:1px solid var(--border);color:var(--text);border-radius:6px;font-family:'Space Mono',monospace;">
        </div>
        <div style="margin-bottom:15px;text-align:left;">
            <label style="display:block;margin-bottom:5px;font-size:12px;color:var(--muted);">Student Name</label>
            <input type="text" id="edit-name-input" style="width:100%;padding:10px;background:var(--navy3);border:1px solid var(--border);color:var(--text);border-radius:6px;">
        </div>
        <div style="margin-bottom:20px;text-align:left;">
            <label style="display:block;margin-bottom:5px;font-size:12px;color:var(--muted);">Branch</label>
            <input type="text" id="edit-branch-input" style="width:100%;padding:10px;background:var(--navy3);border:1px solid var(--border);color:var(--text);border-radius:6px;">
        </div>
        <div class="modal-btns">
            <button class="modal-cancel" id="close-edit-btn">Cancel</button>
            <button class="modal-confirm" id="save-edit-btn" style="background:var(--blue-light);color:var(--navy);">Save Changes</button>
        </div>
    </div>
</div>
"""

if "edit-student-modal" not in html:
    html = html.replace("<!-- html2pdf JS -->", edit_modal + "\n<!-- html2pdf JS -->")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)


# --- 2. Update app.js ---
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

# Apply overrides after studentMap is built
overrides_patch = """
const studentMap = {};
students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });

// Apply any saved Admin edits from localStorage
let savedOverrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
students.forEach((s) => {
    if (savedOverrides[s.roll]) {
        s.name = savedOverrides[s.roll].name;
        s.branch = savedOverrides[s.roll].branch;
        let newRoll = savedOverrides[s.roll].newRoll;
        if (newRoll && newRoll !== s.roll) {
            // Update mapping for the new roll number
            let sIdx = studentMap[s.roll].idx;
            delete studentMap[s.roll];
            s.roll = newRoll;
            studentMap[newRoll] = { ...s, idx: sIdx };
        }
    }
});
// Rebuild studentMap just to be absolutely safe after edits
Object.keys(studentMap).forEach(k => delete studentMap[k]);
students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });
"""
js = re.sub(r"const studentMap = \{\};\nstudents\.forEach\(\(s, i\) => \{ studentMap\[s\.roll\] = \{ \.\.\.s, idx: i \}; \}\);", overrides_patch, js)

# Add "Edit" button to Table
# In renderAdmin, inside students.forEach
edit_btn_html = r"""${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}
        <button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--muted);color:var(--muted);margin-left:4px;" onclick="openEditStudent('${s.roll}')">Edit</button>"""
js = js.replace(r"""${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}""", edit_btn_html)

# Add Edit Logic and Custom Keyboard Refresh Blocker
logic_patch = """

// --- ADMIN EDIT STUDENT LOGIC ---
window.openEditStudent = function(roll) {
    const student = students.find(s => s.roll === roll);
    document.getElementById('edit-original-roll').value = roll;
    document.getElementById('edit-roll-input').value = student.roll;
    document.getElementById('edit-name-input').value = student.name;
    document.getElementById('edit-branch-input').value = student.branch;
    document.getElementById('edit-student-modal').classList.add('active');
};

document.getElementById('close-edit-btn').addEventListener('click', () => {
    document.getElementById('edit-student-modal').classList.remove('active');
});

document.getElementById('save-edit-btn').addEventListener('click', () => {
    const originalRoll = document.getElementById('edit-original-roll').value;
    const newRoll = document.getElementById('edit-roll-input').value.trim().toUpperCase();
    const newName = document.getElementById('edit-name-input').value.trim();
    const newBranch = document.getElementById('edit-branch-input').value.trim();
    
    if (!newRoll || !newName || !newBranch) return;

    // Update in-memory
    const student = students.find(s => s.roll === originalRoll);
    if (!student) return;
    student.name = newName;
    student.branch = newBranch;
    
    // Save to overrides
    let overrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
    if (!overrides[originalRoll]) overrides[originalRoll] = {};
    overrides[originalRoll].name = newName;
    overrides[originalRoll].branch = newBranch;
    overrides[originalRoll].newRoll = newRoll;
    localStorage.setItem('student_overrides', JSON.stringify(overrides));
    
    // If roll changed, update results mapping so grades aren't lost
    if (newRoll !== originalRoll) {
        student.roll = newRoll;
        let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
        if (results[originalRoll]) {
            results[newRoll] = results[originalRoll];
            delete results[originalRoll];
            localStorage.setItem('assessment_results', JSON.stringify(results));
        }
    }
    
    // Refresh admin panel
    document.getElementById('edit-student-modal').classList.remove('active');
    renderAdmin();
});

// --- CUSTOM KEYBOARD REFRESH BLOCKER ---
document.addEventListener('keydown', (e) => {
    // Check for F5 or Ctrl+R
    if (e.key === 'F5' || (e.ctrlKey && e.key.toLowerCase() === 'r')) {
        if (document.getElementById('exam-screen').style.display === 'flex') {
            e.preventDefault();
            if (confirm("WARNING: Refreshing will close your exam and all unsaved progress will be lost. Are you sure you want to refresh?")) {
                // If they say OK, let it refresh
                window.location.reload();
            }
        }
    }
});
"""

if "ADMIN EDIT STUDENT LOGIC" not in js:
    js += logic_patch

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js)

print("Edit and Refresh updates complete!")
