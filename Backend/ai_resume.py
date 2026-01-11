def generate_resume(data):
    name = data.get("name", "")
    job_role = data.get("job_role", "")
    experience = data.get("experience", "")
    email = data.get("email", "")
    phone = data.get("phone", "")
    linkedin = data.get("linkedin", "")
    github = data.get("github", "")

    skills = data.get("skills", "")
    projects = data.get("projects", "")

    skills_list = [s.strip() for s in skills.split(",") if s.strip()]
    projects_list = [p.strip() for p in projects.split(",") if p.strip()]

    summary = f"{name} is a motivated student aiming for {job_role} with {experience} experience."

    return {
        "name": name,
        "job_role": job_role,
        "summary": summary,

        # ✅ LISTS (frontend expects arrays)
        "skills": skills_list,
        "projects": projects_list,

        "experience": experience,

        # ✅ FLAT CONTACT FIELDS
        "email": email,
        "phone": phone,
        "linkedin": linkedin,
        "github": github,
    }
