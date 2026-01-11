import zipfile

def create_resume_zip(resume):
    zip_path = "resume_portfolio.zip"

    with zipfile.ZipFile(zip_path, "w") as zipf:
        content = f"""
Name: {resume['name']}

Summary:
{resume['summary']}

Skills:
{resume['skills']}

Projects:
{resume['projects']}
"""
        zipf.writestr("resume.txt", content)

    return zip_path
