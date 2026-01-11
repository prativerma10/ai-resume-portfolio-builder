function ResumePreview({ resume }) {

  const downloadPDF = async () => {
    const response = await fetch("http://localhost:5000/download-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
  };

  const downloadZIP = async () => {
    const response = await fetch("http://localhost:5000/download-zip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume_portfolio.zip";
    a.click();
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}>
      <h2>{resume.name}</h2>
      <p>{resume.summary}</p>
      <p><b>Email:</b> {resume.email}</p>
<p><b>Phone:</b> {resume.phone}</p>

<p>
  <b>LinkedIn:</b>{" "}
  <a href={resume.linkedin} target="_blank" rel="noreferrer">
    {resume.linkedin}
  </a>
</p>

<p>
  <b>GitHub:</b>{" "}
  <a href={resume.github} target="_blank" rel="noreferrer">
    {resume.github}
  </a>
</p>

<h3>Experience</h3>
<p>{resume.experience}</p>


      <h3>Skills</h3>
      <ul>
  {resume.skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ))}
</ul>


      <h3>Projects</h3>
    <ul>
  {resume.projects.map((project, index) => (
    <li key={index}>{project}</li>
  ))}
</ul>


      <button onClick={downloadPDF}>Download PDF</button>
      <br /><br />
      <button onClick={downloadZIP}>Download ZIP</button>
    </div>
  );
}

export default ResumePreview;

