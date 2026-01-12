import { useState } from "react";
import { FaBuilding } from "react-icons/fa";

function ResumeForm({ setResume }) {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [linkedin, setLinkedin] = useState("");
const [github, setGithub] = useState("");

const handleSubmit = async () => {
  try {
    const response = await fetch(
      "https://prativerma10.pythonanywhere.com/generate-resume",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          skills,
          projects,
          job_role: jobRole,
          experience,
          email,
          phone,
          linkedin,
          github,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();
    console.log("API RESPONSE:", data); // 👈 console me data dikhega

    setResume(data);
  } catch (err) {
    console.error("ERROR:", err);
    alert("Resume generation failed. Check console.");
  }
};


  return (
   <div
  style={{
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #064e3b, #022c22)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', Segoe UI, sans-serif",
  }}
>


      <div
  style={{
    width: "1000px",
    maxWidth: "92%",
    background: "rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "40px 50px",
    boxShadow: "0 20px 45px rgba(0,0,0,0.45)",
    color: "#ffffff",
  }}
>

        <h1
  style={{
    textAlign: "center",
    marginBottom: "6px",
    fontWeight: "600",
    letterSpacing: "1px",
    fontSize: "28px",
  }}
>
  AI Resume Builder
</h1>


        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            opacity: 0.85,
            marginBottom: "20px",
          }}
        >
          
        </p>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap:"40px",
    rowGap: "28px",
    marginTop:"25px",
  }}
>
<div style={{gridColumn:"1 / 3"}}>
        <Input label="Full Name" value={name} setValue={setName} />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
        <Input label="Skills (comma separated)" value={skills} setValue={setSkills}/>
        </div> 
        <div style={{ gridColumn: "1 / -1" }}>
        <Input label="Projects (comma separated)" value={projects} setValue={setProjects}/>
        </div>
        <Input label="Job Role" value={jobRole} setValue={setJobRole} />
        <Input label="Experience (e.g. Fresher / 1 year internship)" value={experience} setValue={setExperience}/>
  <Input label="Email Address" value={email} setValue={setEmail}/>

<Input label="Contact Number" value={phone} setValue={setPhone}/>
<Input label="LinkedIn Profile URL" value={linkedin} setValue={setLinkedin}/>

<Input label="GitHub Profile URL" value={github} setValue={setGithub}/>
</div>

<div style={{ marginTop: "35px", textAlign: "center" }}>
  <button
    onClick={handleSubmit}
    onMouseEnter={(e) => (e.target.style.transform = "translateY(-1px)")}
    onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
    style={{
      width: "60%",
      minWidth: "260px",
      padding: "15px",
      fontSize: "16px",
      borderRadius: "35px",
      border: "none",
      cursor: "pointer",
      background: "linear-gradient(135deg, #10b981, #059669)",
      color: "#ffffff",
      fontWeight: "600",
      letterSpacing: "1px",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
    }}
  >
    Generate AI Resume 🚀
  </button>
</div>


    </div>
    </div>
  );
}

/* Floating input style (unique touch) */
function Input({ label, value, setValue }) {
  return (
    <div>
      <label style={{ fontSize: "13px", opacity: 0.85 }}>{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          marginTop: "6px",
          padding: "12px 18px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          fontSize: "14px",
          background: "rgba(255,255,255,0.85)",
        }}
      />
    </div>
  );
}

export default ResumeForm;
