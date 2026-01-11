import { useState, useEffect } from "react";
import ResumeForm from "./ResumeForm";
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";
import ResumePreview from "./ResumePreview";


function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "dark"
  );
  const [view, setView] = useState("resume"); // "resume" | "portfolio"
  const [background, setBackground] = useState("white");
// possible values: "white" | "black" | "green" | "blue"



  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const [started, setStarted] = useState(false);
  const [resume, setResume] = useState(null);
  const [layout, setLayout] = useState("classic");
  const [template, setTemplate] = useState("green");

  if (!started) {
    return <LandingPage onStart={() => setStarted(true)} />;
  }

  return (
    <div>
      <ResumeForm setResume={setResume} />
      {resume && (
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <button onClick={() => setView("resume")}>Resume</button>
    <button onClick={() => setView("portfolio")}>Portfolio</button>
    
  </div>
)}


  {resume && view === "resume" && (
  <ResumePreview resume={resume} />
)}

{resume && view === "portfolio" && (
  <Portfolio
    resume={resume}
    template={template}
    setTemplate={setTemplate}
    layout={layout}
    setLayout={setLayout}
    mode={mode}
    setMode={setMode}
     background={background}
  setBackground={setBackground}
  />
)}
  
    </div>
  );
}

export default App;
