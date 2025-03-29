const jobs = [
  {
    title: "מהנדס/ת תוכנה בכיר/ה",
    department: "פיתוח",
    locations: ["ישראל", "פולין"],
    isHot: true,
    link: "#",
  },
  {
    title: "מנהל/ת מוצר",
    department: "מוצר",
    locations: ["ישראל"],
    isHot: true,
    link: "#",
  },
  {
    title: "מעצב/ת UI/UX",
    department: "עיצוב",
    locations: ["פולין"],
    isHot: false,
    link: "#",
  },
  {
    title: "מפתח/ת צד שרת",
    department: "פיתוח",
    locations: ["ישראל"],
    isHot: false,
    link: "#",
  },
  {
    title: "ראש צוות בדיקות אוטומטיות",
    department: "בדיקות",
    locations: ["פולין", "ישראל"],
    isHot: true,
    link: "#",
  },
  {
    title: "מומחה/ית SEO",
    department: "שיווק",
    locations: ["פולין"],
    isHot: false,
    link: "#",
  },
  {
    title: "אנליסט/ית נתונים",
    department: "BI",
    locations: ["ישראל"],
    isHot: true,
    link: "#",
  },
  {
    title: "מפתח/ת מובייל",
    department: "פיתוח",
    locations: ["פולין"],
    isHot: false,
    link: "#",
  },
];

// Filter and render logic — same as before

const departments = [...new Set(jobs.map((job) => job.department))];
const locations = [...new Set(jobs.flatMap((job) => job.locations))];

function populateFilters() {
  const deptSelect = document.getElementById("department");
  const locSelect = document.getElementById("location");

  deptSelect.innerHTML = `<option value="הכל">הכל</option>`;
  locSelect.innerHTML = `<option value="הכל">הכל</option>`;

  departments.forEach((dept) => {
    const opt = document.createElement("option");
    opt.value = dept;
    opt.textContent = dept;
    deptSelect.appendChild(opt);
  });

  locations.forEach((loc) => {
    const opt = document.createElement("option");
    opt.value = loc;
    opt.textContent = loc;
    locSelect.appendChild(opt);
  });
}

function renderJobCard(job) {
  const tags = job.locations.map((loc) => `<span class="tag">${loc}</span>`).join(" ");

  return `
      <div class="job-card">
        ${job.isHot ? '<div class="hot-banner">משרה חמה!</div>' : ""}
        <h3>${job.title}</h3>
        <p><strong>מחלקה:</strong> ${job.department}</p>
        <p><strong>מיקומים:</strong> ${tags}</p>
        <a class="job-link" href="${job.link}">פרטים נוספים והגשת מועמדות ←</a>
      </div>
    `;
}

function renderJobs(jobArray) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = jobArray.map(renderJobCard).join("");
}

function applyFilters() {
  const selectedDept = document.getElementById("department").value;
  const selectedLoc = document.getElementById("location").value;
  const hotOnly = document.getElementById("hotOnly").checked;

  const filteredJobs = jobs.filter((job) => {
    const matchDept = selectedDept === "הכל" || job.department === selectedDept;
    const matchLoc = selectedLoc === "הכל" || job.locations.includes(selectedLoc);
    const matchHot = !hotOnly || job.isHot;
    return matchDept && matchLoc && matchHot;
  });

  renderJobs(filteredJobs);
}

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  renderJobs(jobs);

  document.getElementById("department").addEventListener("change", applyFilters);
  document.getElementById("location").addEventListener("change", applyFilters);
  document.getElementById("hotOnly").addEventListener("change", applyFilters);
});
