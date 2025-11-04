# Todo List Application

A simple full-stack todo application built with **Java Spring Boot** (backend) and **React** (frontend).

---

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- In-memory storage (data resets on server restart)
- Clean REST API with React frontend

---

## Prerequisites

 Make sure you have installed:

- **Java 25+** - [Download here](https://adoptium.net/) (project targets Java 25 in `pom.xml`)
- **Maven** (or use included wrapper)
- **Node.js 18+** - [Download here](https://nodejs.org/)

---

## How to Run

### 1. Start the Backend

Open a terminal in the project root and run:

```bash
# macOS/Linux
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```

✅ Backend runs on **http://localhost:8080**

---

### 2. Start the Frontend

Open a **new terminal** and run:

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend runs on **http://localhost:5173**

🌐 Open your browser to **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| GET | `/todos/{id}` | Get single todo |
| POST | `/todos` | Create todo |
| PUT | `/todos/{id}` | Update todo |
| DELETE | `/todos/{id}` | Delete todo |

---

## Project Structure

```
todo-list/
├── src/                    # Backend (Spring Boot)
│   └── main/java/...
├── frontend/               # Frontend (React)
│   └── src/
├── pom.xml                 # Maven config
└── README.md
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Backend won't start | Check Java version: `java -version` |
| Frontend won't start | Install Node.js and run `npm install` |
| Connection errors | Ensure backend is running on port 8080 |
| Port already in use | Stop other applications using ports 8080 or 5173 |
| CORS error in browser | Use `http://localhost:5173` for frontend; CORS for that origin is enabled in `src/main/java/com/Irad/todo/TodoListApplication.java`. |

---

## Quick Start

```bash
# Terminal 1 - Start Backend
./mvnw spring-boot:run

# Terminal 2 - Start Frontend
cd frontend && npm install && npm run dev
```

Then open **http://localhost:5173** in your browser! 🚀

---

**Note:** Data is stored in memory only and will be lost when the server restarts.