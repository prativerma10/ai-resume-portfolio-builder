import "./Portfolio.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub 
} from "react-icons/fa";


function Portfolio({
  resume,
  template,
  setTemplate,
  layout,
  setLayout,
  mode,
  setMode,
   background,
  setBackground
}) {
  if (!resume) return null;
  const linkStyle = {
  color:
    mode === "dark" || template === "green" || template === "blue"
      ? "#a7f3d0"   // soft mint (green/blue bg pe readable)
      : "#0a66c2",  // normal LinkedIn blue (white bg)
  textDecoration: "none",
  fontWeight: "500",
};


// 🎨 TEMPLATE COLORS (NEW)
// eslint-disable-next-line no-unused-vars
const themes = {
  green: {
    border: "#10b981",
    accent: "#10b981",
  },
  blue: {
    border: "#3b82f6",
    accent: "#3b82f6",
  },
  light: {
    border: "#e5e7eb",
    accent: "#6b7280",
  },
};


 
  const skillsArray = Array.isArray(resume.skills)
  ? resume.skills
  : resume.skills?.split(",") || [];
  const skillsWithLevel = skillsArray.map((skill) => {
  const s = skill.toLowerCase();
  let level = 70;

  if (s.includes("react")) level = 80;
  else if (s.includes("javascript")) level = 75;
  else if (s.includes("html")) level = 85;
  else if (s.includes("css")) level = 80;
  else if (s.includes("python")) level = 70;
  else if (s.includes("java")) level = 65;

  return { name: skill, level };
});


 const projectsArray = Array.isArray(resume.projects)
  ? resume.projects
  : resume.projects?.split(",") || [];

const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
};

  // ---------------- PDF ----------------
 const downloadPDF = async () => {
  const element = document.getElementById("portfolio-pdf");
  const clone = element.cloneNode(true);

  clone.style.position = "absolute";
  clone.style.left = "-9999px";
  clone.style.top = "0";

  // 🔒 FORCE SOLID BACKGROUND FOR PDF ONLY
  let bgColor = "#ffffff";
  if (template === "green") bgColor = "#022c22";
  if (template === "blue") bgColor = "#0f172a";
  if (mode === "dark") bgColor = "#000000";

  clone.style.background = bgColor;
  clone.style.color = "#ffffff";

  clone.querySelectorAll(".no-pdf").forEach(el => {
    el.style.display = "none";
  });

  document.body.appendChild(clone);

  const canvas = await html2canvas(clone, {
    scale: 2,
    backgroundColor: bgColor,
  });

  const pdf = new jsPDF("p", "mm", "a4");
  const [r, g, b] = hexToRgb(bgColor);

  // 🟢 PDF BACKGROUND FILL
  pdf.setFillColor(r, g, b);
  pdf.rect(0, 0, 210, 297, "F");

  pdf.addImage(canvas, "PNG", 0, 0, 210, 297);
  pdf.save("Prati_Verma_Portfolio.pdf");

  document.body.removeChild(clone);
};



  // ---------------- ZIP ----------------
  const downloadZIP = async () => {
    const zip = new JSZip();

    zip.file(
      "index.html",
      `<h1>${resume.name}</h1><p>${resume.summary}</p>`
    );

    zip.file("data.json", JSON.stringify(resume, null, 2));

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "portfolio.zip");
  };
const PortfolioContent = () => (
  <>
    <h1>{resume.name}</h1>
    <h3>{resume.job_role}</h3>
    <p>Building clean, modern web experiences 🚀</p>

    <h2>About</h2>
    <p>{resume.summary}</p>

    <h2>Skills</h2>
    {skillsWithLevel.map((skill, i) => (
      <div key={i} style={{ marginBottom: "12px" }}>
        <div>{skill.name} — {skill.level}%</div>
        <div style={{ height: "8px", background: "#e5e7eb" }}>
          <div
            style={{
              width: `${skill.level}%`,
              height: "100%",
              background: "#10b981",
            }}
          />
        </div>
      </div>
    ))}

    <h2>Projects</h2>
    <ul>
      {projectsArray.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>

    <h2>Experience</h2>
    <p>{resume.experience}</p>

    <h2>Contact</h2>

<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

  {/* Email */}
  {resume.email && (
    <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FaEnvelope /> 
      <span>{resume.email}</span>
    </p>
  )}

  {/* Phone */}
  {resume.phone && (
    <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FaPhoneAlt /> 
      <span>{resume.phone}</span>
    </p>
  )}

  {/* LinkedIn */}
  {resume.linkedin && (
    <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FaLinkedin />
      <a
        href={
          resume.linkedin.startsWith("http")
            ? resume.linkedin
            : `https://${resume.linkedin}`
        }
        target="_blank"
        rel="noreferrer"
        style={{
          color: mode === "dark" ? "#a7f3d0" : "#2563eb",
          textDecoration: "none",
          fontWeight: "500",
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        LinkedIn Profile
      </a>
    </p>
  )}

  {/* GitHub */}
  {resume.github && (
    <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <FaGithub />
      <a
        href={
          resume.github.startsWith("http")
            ? resume.github
            : `https://${resume.github}`
        }
        target="_blank"
        rel="noreferrer"
        style={{
          color: mode === "dark" ? "#a7f3d0" : "#111827",
          textDecoration: "none",
          fontWeight: "500",
        }}
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        GitHub Profile
      </a>
    </p>
  )}

</div>

  </>
);
const getBackground = () => {
  // Dark mode always black
  if (mode === "dark") return "#000000";

  // Light mode + template based background
  if (template === "green") return "#022c22";
  if (template === "blue") return "#0f172a";

  // Light / default
  return "#ffffff";
};


const getTextColor = () => {
  if (mode === "dark") return "#ffffff";

  if (template === "green" || template === "blue") {
    return "#ffffff"; // dark backgrounds
  }

  return "#111827"; // white background
};



  return (
    <div
  id="portfolio-pdf"
  style={{
    minHeight: "100vh",
    padding: "50px",
    background: getBackground(),
color: getTextColor(),
  transition: "all 0.3s ease",
   
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    border: "none",

  }}
>


      {/* CONTROLS */}
      <div className="no-pdf" style={{ textAlign: "center" }}>
        <button onClick={() => setTemplate("green")}>Green</button>
        <button onClick={() => setTemplate("blue")}>Blue</button>
        <button onClick={() => setTemplate("light")}>Light</button>
        <br /><br />
        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        <br /><br />
        <button onClick={downloadPDF}>📄 PDF</button>
        <button onClick={downloadZIP}>📦 ZIP</button>
        <br /><br />
        <button onClick={() => setLayout("classic")}>Classic</button>
        <button onClick={() => setLayout("split")}>Split</button>
        <button onClick={() => setLayout("cards")}>Cards</button>
      </div>
{/* CLASSIC */}
{layout === "classic" && (
  <div>
    <PortfolioContent />
  </div>
)}

{/* SPLIT */}
{layout === "split" && (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
    }}
  >
    <PortfolioContent />
  </div>
)}

{/* CARDS */}
{layout === "cards" && (
  <div
    style={{
      padding: "24px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.12)",
    }}
  >
    <PortfolioContent />
  </div>
)}

    </div>
  );
}

export default Portfolio;


