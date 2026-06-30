# E-Commerce Analytics Dashboard

Technical Assignment submission for the **Junior Fullstack Engineer** role at **Gyud Technologies**.

## Tech Stack

- TanStack Start
- React 19
- Tailwind CSS
- Shadcn UI
- Node.js
- Express.js

## Project Structure

```
frontend/   # React + TanStack Start
backend/    # Mock REST API
```

## Run Locally

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

Backend runs at:

```
http://localhost:3001
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

## Mock API Endpoints

- `GET /shopify_data`
- `GET /tiktok_data`

## Run with Docker (Optional)

If Docker Desktop is installed:

```bash
docker compose up --build
```

Frontend: http://localhost:3000

Backend: http://localhost:3001


The dashboard demonstrates the required **Loading**, **Success**, **Partial Success**, and **Error** states using mocked API responses.