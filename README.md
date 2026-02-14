# Workflow Builder Lite Backend

## 1. What is implemented

* User can create workflows
* User can run a workflow by providing input text
* Workflow executes steps sequentially (e.g., clean text → summarize)
* System stores and returns the last 5 workflow runs
* Health endpoint to check backend, database, and LLM status

---

## 2. How to run locally

**Step 1** — Clone the repository

```
git clone https://github.com/Jeelgor/workflow-builder-lite-server.git
```

**Step 2** — Install dependencies

```
npm install
```

**Step 3** — Start the server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## API Endpoints

### 1. Workflows

Create a workflow

```
POST /api/workflows
```

Run a workflow

```
POST /api/workflows/:id/run
```

---

### 2. Run History

Get last 5 workflow executions

```
GET /api/runs
```

---

### 3. Health Check

Check backend system health

```
GET /api/health
```

Returns status of API, database, and LLM.

---