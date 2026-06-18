import os

file_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"

admin_code = """
// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD & LOCAL STORAGE
// ═══════════════════════════════════════════════════════
function saveResultToLocal(roll, attemptedCount) {
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  results[roll] = {
    marks: attemptedCount * 10,
    attempts: attemptedCount,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('assessment_results', JSON.stringify(results));
}

function renderAdmin() {
  const tbody = document.getElementById('admin-tbody');
  tbody.innerHTML = '';
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  
  students.forEach((s, i) => {
    const res = results[s.roll];
    const isSub = !!res;
    
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    tr.style.transition = 'background 0.2s';
    tr.onmouseover = () => tr.style.background = 'rgba(255,255,255,0.02)';
    tr.onmouseout = () => tr.style.background = 'transparent';
    
    tr.innerHTML = `
      <td style="padding:14px 20px;color:var(--muted2);">${i + 1}</td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;color:var(--text);">${s.roll}</td>
      <td style="padding:14px 20px;color:var(--text);">${s.name}</td>
      <td style="padding:14px 20px;color:var(--muted);">${s.branch}</td>
      <td style="padding:14px 20px;">
        <span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;
          ${isSub ? 'background:rgba(16,185,129,0.15);color:#34d399;' : 'background:rgba(245,158,11,0.15);color:#fbbf24;'}">
          ${isSub ? 'SUBMITTED' : 'PENDING'}
        </span>
      </td>
      <td style="padding:14px 20px;font-family:'Space Mono',monospace;font-weight:700;color:${isSub ? 'var(--text)' : 'var(--muted2)'};">
        ${isSub ? res.marks + ' / 50' : '-'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('admin-logout-btn').addEventListener('click', () => {
  document.getElementById('admin-screen').style.display = 'none';
  loginScreen.style.display = 'flex';
  rollInput.value = '';
});

document.getElementById('admin-clear-btn').addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all student results from this computer? This cannot be undone!")) {
    localStorage.removeItem('assessment_results');
    renderAdmin();
  }
});

document.getElementById('admin-download-btn').addEventListener('click', () => {
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  let csv = "S.No,Roll Number,Student Name,Branch,Status,Marks\\n";
  
  students.forEach((s, i) => {
    const res = results[s.roll];
    const status = res ? "Submitted" : "Pending";
    const marks = res ? res.marks : 0;
    csv += `${i + 1},${s.roll},"${s.name}",${s.branch},${status},${marks}\\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'Python_Assessment_Results.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
"""

with open(file_path, "a", encoding="utf-8") as f:
    f.write(admin_code)

print("Admin logic appended to app.js")
