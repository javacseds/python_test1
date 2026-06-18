import re

js_path = r"C:\Users\Rangaswamy Kadapa\.gemini\antigravity-ide\scratch\assessment-portal\app.js"
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

# 1. Update Admin Dashboard (renderAdmin, allowRetest, Chart)
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

window.allowRetest = function(roll) {
  if (confirm("Allow student " + roll + " to retake the test? This will permanently delete their current score!")) {
      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      delete results[roll];
      localStorage.setItem('assessment_results', JSON.stringify(results));
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
  let totalExcellent = 0;
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
         if (results[s.roll].marks >= 40) totalExcellent++;
         else if (results[s.roll].marks >= 30) totalPass++;
         else totalFail++;
      }
    }
  });

  // Render Analytics HTML
  const analyticsDiv = document.getElementById('admin-analytics');
  let analyticsHTML = `<div style="flex:2;display:flex;gap:20px;flex-wrap:wrap;">`;
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
        data: { labels: ['Excellent', 'Pass', 'Fail', 'Absent', 'Pending'], datasets: [{ data: [totalExcellent, totalPass, totalFail, totalAbsent, students.length - (totalExcellent+totalPass+totalFail+totalAbsent)], backgroundColor: ['#eab308', '#10b981', '#ef4444', '#8b5cf6', '#374151'], borderWidth: 0 }] },
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
        statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(139,92,246,0.15);color:#a78bfa;">ABSENT</span>`;
    } else if (isSub) {
        if (res.marks >= 40) {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(234,179,8,0.15);color:#fde047;">EXCELLENT</span>`;
        } else if (res.marks >= 30) {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(16,185,129,0.15);color:#34d399;">PASS</span>`;
        } else {
            statusBadge = `<span style="display:inline-block;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:0.04em;background:rgba(239,68,68,0.15);color:#fca5a5;">FAIL</span>`;
        }
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
      <td style="padding:14px 20px; white-space:nowrap;">
        ${!isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--red);color:var(--red);margin-right:4px;" onclick="markAbsent('${s.roll}')">Absent</button>` : ''}
        ${isSub ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--yellow);color:var(--yellow);margin-right:4px;" onclick="allowRetest('${s.roll}')">Retest</button>` : ''}
        ${isSub && !isAbs ? `<button class="clear-btn" style="padding:4px 8px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}
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
    
    let resultText = "Pending";
    let resultColor = "#666";
    if (res && res.status !== "ABSENT") {
        if (res.marks >= 40) { resultText = "EXCELLENT"; resultColor = "#d97706"; }
        else if (res.marks >= 30) { resultText = "PASS"; resultColor = "#059669"; }
        else { resultText = "FAIL"; resultColor = "#dc2626"; }
    } else if (res && res.status === "ABSENT") {
        resultText = "ABSENT"; resultColor = "#7c3aed";
    }

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
            <tr><td style="padding:8px 0;color:#666;">Status</td><td style="font-weight:700;color:${resultColor};">${resultText}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:18px;">${res && res.status !== 'ABSENT' ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res && res.status !== 'ABSENT' ? res.attempts + ' / 5' : 'N/A'}</td></tr>
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

# 2. Add Proctoring rules (Tab tracking, BeforeUnload) at the bottom
proctor_patch = """

// --- STRICT PROCTORING ---
let tabSwitches = 0;
document.addEventListener('visibilitychange', () => {
    if (document.hidden && document.getElementById('exam-screen').style.display === 'flex') {
        tabSwitches++;
        if (tabSwitches >= 3) {
            alert("STRIKE 3: You have switched tabs 3 times. Your exam is now being forcibly submitted.");
            document.getElementById('confirm-submit-btn').click();
        } else {
            alert(`WARNING: Do not switch tabs or windows! Strike ${tabSwitches} of 3.\\nIf you reach 3 strikes, your exam will automatically submit!`);
        }
    }
});

window.addEventListener('beforeunload', function (e) {
    if (document.getElementById('exam-screen').style.display === 'flex') {
        e.preventDefault();
        e.returnValue = 'Are you sure? Your exam progress will be lost if you refresh!';
    }
});
"""

# ensure it's not added twice if we run this twice
if "STRICT PROCTORING" not in js:
    js += proctor_patch

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js)

print("Proctoring & Admin updates complete!")
