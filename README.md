
---

# Multi-Environment Ticket Management Deployment

## 📌 Overview
This project demonstrates a **multi-environment ticket management application** deployed locally using **Docker Desktop**.  
It consists of:
- **Development Backend** (Flask, port 3001)  
- **Production Backend** (Flask + Gunicorn, port 3002)  
- **Frontend** (React, served via Nginx, port 3000)  

The frontend interacts with both backends and displays environment-specific responses.

---

## 🛠 Prerequisites
- Docker Desktop installed (latest version)  
- Git installed  
- Node.js (optional, if running frontend outside Docker)  

---

## 📂 Project Structure
```
multiEnv/
├── docker-compose.yml
├── backend/
│   ├── dev/
│   │   ├── app.py
│   │   ├── requirements.txt
│   │   ├── Dockerfile
│   │   └── .env
│   └── prod/
│       ├── app.py
│       ├── requirements.txt
│       ├── Dockerfile
│       └── .env
└── frontend/
    ├── src/
    │   └── App.js
    ├── public/
    ├── Dockerfile
    └── package.json
```

---

## ⚙️ Environment Setup
- Local environment: Laptop with Docker Desktop  
- Networking: Default Docker bridge network  
- Ports exposed:  
  - Frontend → `3000`  
  - Dev Backend → `3001`  
  - Prod Backend → `3002`  

---

## 🐳 Docker Configuration
- **Backend Dev** → Flask app with `flask run`  
- **Backend Prod** → Flask app served via Gunicorn  
- **Frontend** → React app built and served via Nginx  
- **docker-compose.yml** → Defines all three services and networking  

---

## 🚀 Deployment Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/multienv-deployment-[Name].git
   cd multienv-deployment-[Name]
   ```
2. Build and run containers:
   ```bash
   docker-compose up --build
   ```
3. Verify running containers:
   ```bash
   docker ps
   ```
4. Access endpoints:
   - Frontend Dashboard → `http://localhost:3000` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A3000%2F")  
   - Development → `http://localhost:3000/dev` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A3000%2Fdev")  
   - Production → `http://localhost:3000/prod` [(localhost in Bing)](https://www.bing.com/search?q="http%3A%2F%2Flocalhost%3A3000%2Fprod")  

---

## 🧪 Testing & Evidence
- Screenshot of `docker ps` showing 3 containers  
- Screenshot of frontend dashboard  
- Screenshot of `/dev` and `/prod` responses  
- Logs showing backend requests  

---

## 📖 Assumptions
- Deployment is local (no EC2 used)  
- Default Docker network used for service communication  
- React frontend calls backends via service names (`backend-dev`, `backend-prod`) inside Docker  

---

## 🛠 Troubleshooting
- **Port conflicts** → Ensure ports 3000–3002 are free  
- **Frontend not connecting** → Check axios URLs (`backend-dev:3001`, `backend-prod:3002`)  
- **Container build errors** → Run `docker-compose build --no-cache`  

---
