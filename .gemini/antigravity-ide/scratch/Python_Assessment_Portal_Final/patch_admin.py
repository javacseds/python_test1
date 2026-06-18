import os

file_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

idx = content.find("// ═══════════════════════════════════════════════════════\n//  ADMIN DASHBOARD & LOCAL STORAGE")
if idx != -1:
    base = content[:idx]
else:
    base = content

advanced_admin = """
// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD, ANALYTICS & PDF REPORTS
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
  
  // 1. Calculate Analytics
  let branchStats = {};
  
  students.forEach((s) => {
    if (!branchStats[s.branch]) {
      branchStats[s.branch] = { total: 0, submitted: 0, totalMarks: 0 };
    }
    branchStats[s.branch].total++;
    
    if (results[s.roll]) {
      branchStats[s.branch].submitted++;
      branchStats[s.branch].totalMarks += results[s.roll].marks;
    }
  });

  // Render Analytics HTML
  const analyticsDiv = document.getElementById('admin-analytics');
  let analyticsHTML = '';
  for (let branch in branchStats) {
    let stat = branchStats[branch];
    let avg = stat.submitted > 0 ? (stat.totalMarks / stat.submitted).toFixed(1) : 0;
    analyticsHTML += `
      <div style="flex:1;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center;">
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
  analyticsDiv.innerHTML = analyticsHTML;
  
  // 2. Render Table
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
      <td style="padding:14px 20px;">
        <button class="clear-btn" style="padding:4px 12px;font-size:12px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">View Report</button>
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
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gowthami Institute of Technology</h2>
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

document.getElementById('close-report-btn').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('download-student-pdf-btn').addEventListener('click', () => {
    const element = document.getElementById('student-report-content');
    const opt = {
        margin:       0.5,
        filename:     'Student_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});

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

document.getElementById('admin-download-pdf-btn').addEventListener('click', () => {
    // We will generate PDF of the entire admin-report-container
    // First, let's inject a header with date
    const container = document.getElementById('admin-report-container');
    
    // Create a temporary print header
    const header = document.createElement('div');
    header.id = 'temp-pdf-header';
    header.style.textAlign = 'center';
    header.style.marginBottom = '20px';
    header.innerHTML = `
        <h1 style="color:var(--text);margin-bottom:5px;">Python Lab Assessment - Consolidated Report</h1>
        <p style="color:var(--muted);font-size:14px;margin-top:0;">Generated on: ${getSystemDateString()}</p>
    `;
    container.insertBefore(header, container.firstChild);
    
    // Configure html2pdf
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'Consolidated_Branch_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#0d1b2a' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    html2pdf().set(opt).from(container).save().then(() => {
        // Remove the temporary header after saving
        document.getElementById('temp-pdf-header').remove();
    });
});
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(base + advanced_admin)

print("Advanced Admin successfully applied!")
