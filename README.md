# AI-Powered Financial Fraud Detection System

This project is a full-stack AI application that detects fraudulent financial transactions using a machine learning model integrated with a modern web application.

The system analyzes transaction details and predicts whether a transaction is fraudulent using a trained ML model.

---

## 🚀 Tech Stack

Frontend  
- React (Vite)
- Axios
- Recharts

Backend  
- Spring Boot
- REST APIs
- PostgreSQL

Machine Learning Service  
- Python
- Flask
- Scikit-learn
- Random Forest Classifier

Database  
- PostgreSQL

---

## 🧠 System Architecture

User → React Frontend → Spring Boot Backend → ML Service (Flask) → PostgreSQL

1. User submits transaction
2. Backend sends transaction data to ML service
3. ML model predicts fraud probability
4. Backend stores result in PostgreSQL
5. Dashboard displays fraud analytics

---

## 📂 Project Structure
AI-Fraud-Detection
│
├── frontend/ # React dashboard
│
├── backend/ # Spring Boot REST API
│
├── fraud-ml-service/ # Flask ML microservice
│
└── README.md

---

## ⚙️ How to Run the Project

### 1️⃣ Start ML Service

Navigate to ML service:
cd fraud-ml-service
Run: python app.py
Server runs on: http://localhost:5050

---

### 2️⃣ Start Backend

Navigate to backend:
cd backend/myapp
Run: mvn spring-boot:run
Server runs on: http://localhost:4040

---

### 3️⃣ Start Frontend

Navigate to frontend:
cd frontend
Run:
npm install
npm run dev
Frontend runs on: http://localhost:5173


---

## 📊 Features

- Real-time fraud detection
- ML-powered risk prediction
- Fraud probability scoring
- Transaction analytics dashboard
- Fraud vs normal transaction visualization
- Microservice architecture

---

## ⚠️ Note

Large datasets are not included in this repository due to GitHub size limits.

You can generate the dataset using:
generate_data.py
or download the dataset from Kaggle.

---

## 👨‍💻 Author

Harshitha Reddy
Dept. of AI