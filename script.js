let currentTab = "All";

let jobs = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$1200/month",
    description: "Build responsive web applications using modern frameworks.",
    status: "All"
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Backend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "$1400/month",
    description: "Develop secure APIs and manage databases.",
    status: "All"
  },
  {
    id: 3,
    company: "Amazon",
    position: "Cloud Engineer",
    location: "Remote",
    type: "Contract",
    salary: "$1600/month",
    description: "Work with AWS services and deployment pipelines.",
    status: "All"
  },
  {
    id: 4,
    company: "Meta",
    position: "UI Designer",
    location: "Hybrid",
    type: "Full-time",
    salary: "$1100/month",
    description: "Design modern user interfaces and prototypes.",
    status: "All"
  },
  {
    id: 5,
    company: "Netflix",
    position: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$1000/month",
    description: "Test applications and ensure product quality.",
    status: "All"
  },
  {
    id: 6,
    company: "Tesla",
    position: "Software Engineer",
    location: "On-site",
    type: "Full-time",
    salary: "$1500/month",
    description: "Develop software for automation systems.",
    status: "All"
  },
  {
    id: 7,
    company: "Adobe",
    position: "React Developer",
    location: "Remote",
    type: "Contract",
    salary: "$1300/month",
    description: "Create dynamic web interfaces using React.",
    status: "All"
  },
  {
    id: 8,
    company: "Spotify",
    position: "Data Analyst",
    location: "Hybrid",
    type: "Full-time",
    salary: "$1200/month",
    description: "Analyze user data and generate insights.",
    status: "All"
  }
];

const container = document.getElementById("jobsContainer");
const emptyState = document.getElementById("emptyState");

function updateDashboard() {
  document.getElementById("totalCount").textContent = jobs.length;
  document.getElementById("interviewCount").textContent =
    jobs.filter(j => j.status === "Interview").length;
  document.getElementById("rejectedCount").textContent =
    jobs.filter(j => j.status === "Rejected").length;
}

function getFilteredJobs() {
  if (currentTab === "All") return jobs;
  return jobs.filter(job => job.status === currentTab);
}

function renderJobs() {
  container.innerHTML = "";
  const filtered = getFilteredJobs();

  document.getElementById("tabCount").textContent = filtered.length;

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow";

    card.innerHTML = `
      <h3 class="text-xl font-bold">${job.position}</h3>
      <p class="font-semibold">${job.company}</p>
      <p class="text-sm text-gray-500">${job.location} • ${job.type}</p>
      <p class="text-sm mt-1">Salary: ${job.salary}</p>
      <p class="text-sm mt-2">${job.description}</p>

      <div class="flex gap-2 mt-3">
        <button class="interviewBtn bg-green-500 text-white px-3 py-1 rounded">
          Interview
        </button>

        <button class="rejectBtn bg-red-500 text-white px-3 py-1 rounded">
          Rejected
        </button>

        <button class="deleteBtn bg-gray-400 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    `;

    // Interview Button
    card.querySelector(".interviewBtn").onclick = () => {
      job.status = job.status === "Interview" ? "All" : "Interview";
      renderJobs();
      updateDashboard();
    };

    // Rejected Button
    card.querySelector(".rejectBtn").onclick = () => {
      job.status = job.status === "Rejected" ? "All" : "Rejected";
      renderJobs();
      updateDashboard();
    };

    // Delete Button
    card.querySelector(".deleteBtn").onclick = () => {
      jobs = jobs.filter(j => j.id !== job.id);
      renderJobs();
      updateDashboard();
    };

    container.appendChild(card);
  });
}

// Tab Switching
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentTab = btn.dataset.tab;

    document.querySelectorAll(".tabBtn").forEach(b => {
      b.classList.remove("bg-blue-500", "text-white");
      b.classList.add("bg-gray-300");
    });

    btn.classList.add("bg-blue-500", "text-white");
    btn.classList.remove("bg-gray-300");

    renderJobs();
  });
});

// Initial Load
renderJobs();
updateDashboard();