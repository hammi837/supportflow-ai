# SupportFlow AI 🤖

> An intelligent, multi-tenant customer support platform powered by AI agents — built with FastAPI, React, and PostgreSQL.

---

## 🚀 Overview

SupportFlow AI is a full-stack SaaS platform that automates and enhances customer support using AI. It features a ReAct-based AI agent, RAG-powered knowledge base, real-time chat, voice AI, visual workflow builder, and a human agent handoff system — all in one platform.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Zustand |
| **Backend** | FastAPI (Python), SQLAlchemy, Alembic |
| **Database** | PostgreSQL + pgvector |
| **Cache** | Redis |
| **Auth** | JWT (PyJWT) + bcrypt |
| **AI / LLM** | Gemini / GPT-4o-mini (swappable provider) |
| **Voice** | STT + TTS via API |

---

## 📁 Project Structure

```
supportflow_ai/
├── backend/
│   ├── app/
│   │   ├── api/            # API route handlers (auth, tickets, conversations...)
│   │   ├── agents/         # AI Agent (ReAct loop, tools, memory, executor)
│   │   ├── core/           # Config, security (JWT, hashing)
│   │   ├── db/             # Database connection & session
│   │   ├── llm/            # LLM provider abstraction (Gemini, OpenAI, Ollama)
│   │   ├── models/         # SQLAlchemy database models
│   │   ├── rag/            # RAG pipeline (chunking, embeddings, retrieval)
│   │   ├── schemas/        # Pydantic request/response schemas
│   │   ├── services/       # Business logic layer
│   │   ├── voice/          # STT / TTS / Voice session
│   │   ├── workflows/      # Visual workflow engine
│   │   └── main.py         # FastAPI app entry point
│   ├── migrations/         # Alembic database migrations
│   ├── requirements.txt
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── pages/          # Dashboard, Inbox, Conversations, Tickets...
    │   ├── components/     # Reusable UI components
    │   ├── layouts/        # Page layouts (Sidebar, Header)
    │   ├── services/       # Axios API service calls
    │   ├── stores/         # Zustand global state stores
    │   ├── hooks/          # Custom React hooks
    │   ├── types/          # TypeScript type definitions
    │   └── utils/          # Helper utilities
    ├── .env.example
    └── package.json
```

---

## ⚙️ Local Development Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL 15+

### 1. Clone the Repository

```bash
git clone https://github.com/hammi837/supportflow-ai.git
cd supportflow-ai
```

### 2. Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1       # Windows
# source venv/bin/activate         # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# Run database migrations
alembic upgrade head

# Start the backend server
uvicorn app.main:app --reload
```

Backend will be running at: **`http://localhost:8000`**
Swagger API Docs: **`http://localhost:8000/docs`**

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start the frontend dev server
npm run dev
```

Frontend will be running at: **`http://localhost:5173`**

---

## 🔑 Authentication

| Endpoint | Method | Description |
|---|---|---|
| `/api/auth/register` | POST | Register a new user and organization |
| `/api/auth/login` | POST | Login and receive a JWT token |

---

## 🌿 Git Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable, production-ready code |
| `develop` | Active development branch (all work goes here first) |

All features are developed and tested on `develop`, then merged into `main` daily once verified.

---

## 📌 Roadmap

- [x] Project structure & folder setup
- [x] FastAPI backend with PostgreSQL
- [x] JWT authentication (Register / Login)
- [x] Alembic database migrations
- [ ] Protected routes & middleware
- [ ] Conversations & Ticket management
- [ ] AI Agent (ReAct loop)
- [ ] RAG Knowledge Base
- [ ] Real-time chat (WebSockets)
- [ ] Frontend Dashboard UI
- [ ] Voice AI
- [ ] Visual Workflow Builder
- [ ] Analytics Dashboard

---

## 👨‍💻 Author

**Hammad** — [@hammi837](https://github.com/hammi837)
