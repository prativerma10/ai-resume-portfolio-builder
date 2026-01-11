
/* Small reusable feature card */
function Feature({ title, text }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "15px",
        padding: "20px",
        minWidth: "220px",
        background: "rgba(255,255,255,0.1)",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "14px", opacity: 0.9 }}>{text}</p>
    </div>
  );
}

function LandingPage({ onStart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #064e3b, #022c22)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          padding: "50px",
          maxWidth: "900px",
          width: "100%",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          AI Resume & Portfolio Builder
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          Create professional resumes and portfolios using Artificial Intelligence
        </p>

        <div
          style={{
            height: "2px",
            width: "80px",
            background: "#ffffff",
            margin: "25px auto",
            borderRadius: "5px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Feature title="AI Powered" text="Smart resume generation" />
          <Feature title="PDF & ZIP" text="Multiple download formats" />
          <Feature title="Portfolio Ready" text="Instant portfolio output" />
        </div>

        <button
  onClick={onStart}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}
  style={{
    marginTop: "40px",
    padding: "16px 40px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    color: "#ffffff",
    fontWeight: "bold",
    transition: "transform 0.3s ease",
  }}
>
  Get Started 🚀
</button>


        <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.8 }}>
          Designed for students & freshers • Built with React & Flask
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
