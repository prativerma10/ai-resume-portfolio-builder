from fpdf import FPDF

def create_resume_pdf(resume):
    pdf = FPDF()
    pdf.add_page()

    # Title - Name
    pdf.set_font("Arial", "B", 20)
    pdf.cell(0, 12, resume["name"], ln=True)

    pdf.ln(5)

    # Summary
    pdf.set_font("Arial", "", 12)
    pdf.multi_cell(0, 8, resume["summary"])

    pdf.ln(5)

    # Skills
    pdf.set_font("Arial", "B", 14)
    pdf.cell(0, 10, "Skills", ln=True)

    pdf.set_font("Arial", "", 12)
    for skill in resume["skills"].split(","):
        pdf.cell(0, 8, f"- {skill.strip()}", ln=True)

    pdf.ln(3)

    # Projects
    pdf.set_font("Arial", "B", 14)
    pdf.cell(0, 10, "Projects", ln=True)

    pdf.set_font("Arial", "", 12)
    for project in resume["projects"].split(","):
        pdf.cell(0, 8, f"- {project.strip()}", ln=True)

    file_path = "resume.pdf"
    pdf.output(file_path)

    return file_path
