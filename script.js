const jobs = [
  // Operations
  {
    title: "IT Specialist",
    department: "Operations",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "IT and Helpdesk Administrator",
    department: "Operations",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/2015F",
  },

  // Applications
  {
    title: "Web Application Backend Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/74356",
  },
  {
    title: "DevOps Engineer (US)",
    department: "Applications",
    locations: ["Miami"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/C374B",
  },
  {
    title: "Full Stack Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/00D4B",
  },
  {
    title: "FinOps Specialist",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/11E49",
  },
  {
    title: "Backend Engineer",
    department: "Applications",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/19E41",
  },

  // Finance
  {
    title: "Senior FP&A Analyst",
    department: "Finance",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/32356",
  },

  // Engineering
  {
    title: "AI MLOps Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Data Scientist - Deep Learning Forecasting",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    locations: ["Poland"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Algorithm Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "ML/DL Engineer",
    department: "Engineering",
    locations: ["Poland"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Data Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Data Scientist Engineer",
    department: "Engineering",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },

  // Management
  {
    title: "Director of R&D",
    department: "Management",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },

  // QA
  {
    title: "QA Team Lead",
    department: "QA",
    locations: ["Israel"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },

  // Support
  {
    title: "Junior Data Engineer",
    department: "Support",
    locations: ["Poland"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
  {
    title: "Customer Support Engineer",
    department: "Support",
    locations: ["Poland"],
    isHot: false,
    link: "https://www.fetcherr.io/careers/D6350",
  },
];

// Filter and render logic — same as before

const departments = [...new Set(jobs.map((job) => job.department))];
const locations = [...new Set(jobs.flatMap((job) => job.locations))];

function populateFilters() {
  const deptSelect = document.getElementById("department");
  const locSelect = document.getElementById("location");

  deptSelect.innerHTML = `<option value="All">All</option>`;
  locSelect.innerHTML = `<option value="All">All</option>`;

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
  const tags = job.locations
    .map((loc) => `<span class="tag">${loc}</span>`)
    .join(" ");

  return `
      <div class="job-card">
        ${job.isHot ? '<div class="hot-banner">Hot Job</div>' : ""}
        <h3>${job.title}</h3>
        <p><strong>Department:</strong> ${job.department}</p>
        <p><strong>Location:</strong> ${tags}</p>
        <a class="job-link" href="${job.link}">Apply Now</a>
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
    const matchDept = selectedDept === "All" || job.department === selectedDept;
    const matchLoc =
      selectedLoc === "All" || job.locations.includes(selectedLoc);
    const matchHot = !hotOnly || job.isHot;
    return matchDept && matchLoc && matchHot;
  });

  renderJobs(filteredJobs);
}

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  renderJobs(jobs);

  document
    .getElementById("department")
    .addEventListener("change", applyFilters);
  document.getElementById("location").addEventListener("change", applyFilters);
  document.getElementById("hotOnly").addEventListener("change", applyFilters);
});
