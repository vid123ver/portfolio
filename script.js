const PROFILE = {
  name: "Vidhan Verma",
  email: "vidhanverma2311@gmail.com",
  phone: "+91 8979542285",
  github: "https://github.com/vid123ver",
  linkedin: "https://www.linkedin.com/in/vidhan-verma-vid123ver/",
};

const PROJECTS = [
  {
    id: "expense-manager",
    title: "Expense Manager (Production-ready • Render)",
    tech: "React, Tailwind, Node.js, MongoDB, JWT",
    summary:
      "A full-stack application for personal and group expense tracking with exports, graphs and reminders.",
    details: `◦ Designed to solve problems of unorganized expense tracking, group expense splitting, and financial
transparency.<br>
◦ Built the frontend with React, Tailwind CSS, and Axios for a responsive and dynamic user experience.<br>
◦ Developed the backend using Node.js and MongoDB, implementing secure authentication and role-
based access control.<br>
◦ Integrated features like expense logging, recurring transactions, PDF/CSV/Excel export, financial
graphs, and reminders.<br>
◦ Followed agile development practices, collaborated with mentors, and applied modular, scalable de-
sign principles.`,
    link: "https://github.com/Vidhiverma602/MY-EXPENSES",
  },
  {
    id: "chat-app",
    title: "Real-Time Chat Application",
    tech: "MERN, Socket.IO",
    summary:
      "Real-time chat with typing indicators, message history, online presence and JWT auth.",
    details: `◦ Created a full-stack chat application to provide fast and reliable one-on-one and group communication.<br>
◦ Solves the need for real-time interaction with features like typing indicators, message history, and
online presence.<br>
◦ Built using the MERN stack with Socket.IO to achieve sub-100ms real-time message delivery.<br>
◦ Implemented JWT authentication, user profiles, and secure session management for privacy.<br>
◦ Optimized backend with Express.js and MongoDB to handle concurrent users efficiently.`,
    link: "https://github.com/Vidhiverma602/Real_Time_ChatVV/tree/master",
  },
  {
    id: "mini-compiler",
    title: "C Language Mini Compiler",
    tech: "C++, BNF Grammar",
    summary:
      "Teaching compiler implementing lexical analysis, parsing, semantic checks and code-gen for a subset of C.",
    details: `◦ Developed a mini compiler to understand and implement the core concepts of compiler design.<br>
◦ Aimed at translating a subset of C programs into intermediate code, ensuring type safety and error
detection.<br>
◦ Implemented five phases: Lexical Analysis, Syntax Analysis, AST construction, Semantic Analysis,
and Code Generation.<br>
◦ Built a custom lexer using enums/structs for tokenization and a Recursive Descent Parser guided by
BNF grammar.<br>
◦ Integrated semantic checks, a symbol table for scope/type tracking, and generated pseudo-code for
supported constructs.`,
    link: "https://github.com/vid123ver/C-Compiler",
  },
  {
    id: "ransomware-sim",
    title: "Ransomware Simulation (Academic)",
    tech: "Python, cryptography, Tkinter",
    summary:
      "Academic simulation to study file-encryption workflows and countermeasures.",
    details: `◦ Designed a ransomware simulation project for academic research and cybersecurity awareness.<br>
◦ Objective was to study how file encryption threats work and explore countermeasures in a safe envi-
ronment.<br>
◦ Implemented file encryption using Fernet (symmetric encryption) from the Python cryptography li-
brary.<br>
◦ Built a Tkinter-based GUI to mimic real ransomware behavior and user interaction.<br>
◦ Integrated a safe decryption workflow to restore files and presented the project in academic demon-
strations.`,
    link: "https://github.com/vid123ver/-RANSOMWARE_project",
  },
  {
    id: "parkinsons-detection",
    title: "Parkinson’s Disease Detection System",
    tech: "Python, scikit-learn, OpenCV, SVM, Random Forest, KNN",
    summary:
      "ML system for early detection of Parkinson’s Disease using hand-drawn spirals and waves.",
    details: `◦ Developed a machine learning system for early detection of Parkinson’s Disease using hand-drawn spirals and waves.<br>
◦ Performed essential image preprocessing including noise removal, thresholding, and contour isolation using OpenCV.<br>
◦ Extracted discriminative visual features through Histogram of Oriented Gradients (HOG) to analyze distortions.<br>
◦ Trained multiple ML models — Random Forest, SVM, and KNN — achieving 90% accuracy on extra datasets.<br>
◦ Built explainable visualizations highlighting feature importance and decision boundaries to assist clinical interpretation.<br>
◦ End-to-end workflow: Preprocess → extract HOG features → classify ML models → display predictions with insights.`,
    link: "https://github.com/Vidhiverma602/Early-Parkinson-detection-",
  },
];

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Inject projects
const projectList = document.getElementById("projectList");
PROJECTS.forEach((p) => {
  const el = document.createElement("article");
  el.className = "project reveal";
  el.innerHTML = `
    <h3 style="margin:0">${p.title}</h3>
    <div style="color:var(--muted);font-size:13px;margin-top:6px">${
      p.tech
    }</div>
    <p style="margin-top:10px;color:var(--muted)">${p.summary}</p>
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end">
      <button data-id="${p.id}" class="btn ghost">Details</button>
      <a class="btn" href="${p.link || "#"}" target="_blank">View Code</a>
    </div>`;
  projectList.appendChild(el);
});

// Modal
document.getElementById("projectList").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  const id = btn.getAttribute("data-id");
  const p = PROJECTS.find((x) => x.id === id);
  document.getElementById("modalContent").innerHTML = `
    <h2 style="margin-top:0">${p.title}</h2>
    <p style="color:var(--muted)">${p.details}</p>
    <p style="margin-top:12px;color:var(--muted)">Tech stack: ${p.tech}</p>`;
  document.getElementById("modal").style.display = "flex";
});
document
  .getElementById("closeModal")
  .addEventListener(
    "click",
    () => (document.getElementById("modal").style.display = "none")
  );

// Contact form
// Contact form - submit via AJAX to the form `action` (e.g. Formspree)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const action = contactForm.getAttribute("action");
    if (!action) {
      alert(
        "No form endpoint configured. Please add a form action to the HTML."
      );
      return;
    }

    const submitBtn =
      contactForm.querySelector('button[type="submit"]') ||
      contactForm.querySelector("button");
    if (submitBtn) submitBtn.disabled = true;

    const formData = new FormData(contactForm);
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        // success
        alert("Thanks! Your message has been sent.");
        contactForm.reset();
      } else {
        // try to parse error message
        let detail = "Please try again later.";
        try {
          const data = await res.json();
          if (data && data.error) detail = data.error;
        } catch (_) {}
        alert("Submission failed. " + detail);
      }
    } catch (err) {
      alert("Submission failed. Please check your connection and try again.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Navigation highlight + scroll
const links = Array.from(document.querySelectorAll("[data-link]"));
function setActive(hash) {
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === hash)
  );
}
function go(hash) {
  location.hash = hash;
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  setActive(hash);
}
links.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const h = a.getAttribute("href");
    go(h);
  })
);
if (location.hash) setActive(location.hash);
else setActive("#home");

// reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ESC to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.getElementById("modal").style.display = "none";
});
