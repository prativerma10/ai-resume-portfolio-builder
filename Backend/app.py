from zip_generator import create_resume_zip
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from ai_resume import generate_resume
from pdf_generator import create_resume_pdf

app = Flask(__name__)
CORS(app)


@app.route("/generate-resume", methods=["POST"])
def generate_resume_api():
    data = request.json
    print("DATA RECEIVED FROM FRONTEND:", data)
    return jsonify(generate_resume(data))


@app.route("/download-pdf", methods=["POST"])
def download_pdf():
    data = request.json
    pdf_path = create_resume_pdf(data)
    return send_file(pdf_path, as_attachment=True)

@app.route("/download-zip", methods=["POST"])
def download_zip():
    data = request.json
    zip_path = create_resume_zip(data)
    return send_file(zip_path, as_attachment=True)




