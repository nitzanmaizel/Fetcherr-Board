const jobs = [
  // Operations
  {
    title: "IT Specialist",
    department: "Operations",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "IT and Helpdesk Administrator",
    department: "Operations",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // Applications
  {
    title: "Backend Applications Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "DevOps Engineer (US)",
    department: "Applications",
    locations: ["Atlanta"],
    isHot: false,
    link: "#",
  },
  {
    title: "Full Stack Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "Backend Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // Finance
  {
    title: "Senior FP&A Analyst",
    department: "Finance",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // Engineering
  {
    title: "AI MLOps Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "Data Scientist - Deep Learning Forecasting",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    locations: ["Poland"],
    isHot: false,
    link: "#",
  },
  {
    title: "Algorithm Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "ML/DL Engineer",
    department: "Engineering",
    locations: ["Poland"],
    isHot: false,
    link: "#",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "Data Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },
  {
    title: "Data Scientist Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // Management
  {
    title: "Director of R&D",
    department: "Management",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // QA
  {
    title: "QA Team Lead",
    department: "QA",
    locations: ["Israel"],
    isHot: false,
    link: "#",
  },

  // Support
  {
    title: "Junior Data Engineer",
    department: "Support",
    locations: ["Poland"],
    isHot: false,
    link: "#",
  },
  {
    title: "Customer Support Engineer",
    department: "Support",
    locations: ["Poland"],
    isHot: false,
    link: "#",
  }
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
