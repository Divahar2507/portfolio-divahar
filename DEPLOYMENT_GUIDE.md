# Deployment Guide

This guide will help you deploy your portfolio application to the web for free.

## Prerequisites

1.  **GitHub Account**: You already have this.
2.  **MongoDB Atlas Account**: For your cloud database.
3.  **Render Account**: For hosting the Backend.
4.  **Vercel Account**: For hosting the Frontend.

---

## Step 1: Set up MongoDB Atlas (Database)

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up/login.
2.  Create a new **Cluster** (the free Shared tier is fine).
3.  In **Database Access**, create a database user (username/password). **Remember this password!**
4.  In **Network Access**, add IP Address `0.0.0.0/0` (Allow Access from Anywhere).
5.  Click **Connect** -> **Drivers** -> Copy the connection string.
    *   It looks like: `mongodb+srv://<username>:<password>@cluster0.xyz.mongodb.net/?retryWrites=true&w=majority`
    *   Replace `<password>` with your actual password.
    *   **Save this string**, you will need it for the backend.

---

## Step 2: Deploy Backend to Render

1.  Go to [Render.com](https://render.com/) and sign up.
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub repository (`portfolio-divahar`).
4.  **Configure the service**:
    *   **Name**: `portfolio-backend` (or similar)
    *   **Root Directory**: `backend` (Important!)
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
5.  **Environment Variables** (Advanced Section):
    *   Add `MONGODB_URI`: Paste your MongoDB Atlas connection string from Step 1.
    *   Add `GITHUB_USERNAME`: `Divahar2507`
    *   Add `NODE_ENV`: `production`
6.  Click **Create Web Service**.
7.  Wait for the deployment to finish. Render will give you a URL (e.g., `https://portfolio-backend-xyz.onrender.com`). **Copy this URL.**

---

## Step 3: Deploy Frontend to Vercel

1.  Go to [Vercel.com](https://vercel.com/) and sign up.
2.  Click **Add New...** -> **Project**.
3.  Import your `portfolio-divahar` repository.
4.  **Configure the project**:
    *   **Framework Preset**: Create React App
    *   **Root Directory**: Click Edit and select `frontend`.
5.  **Environment Variables**:
    *   Add `REACT_APP_API_URL`: Paste your **Backend URL** from Step 2 (e.g., `https://portfolio-backend-xyz.onrender.com`).
        *   *Note: Do not add a trailing slash `/` at the end.*
6.  Click **Deploy**.

---

## Step 4: Final Check

1.  Visit your new Vercel URL (e.g., `https://portfolio-divahar.vercel.app`).
2.  Check if the data loads correctly.
3.  If you see a loading spinner forever, check the Console (F12) for errors. It usually means the `REACT_APP_API_URL` is wrong or the Backend is sleeping (Render free tier sleeps after inactivity, give it a minute to wake up).

## Troubleshooting

*   **CORS Errors**: If you see CORS errors in the browser console, ensure your Backend allows the Vercel domain. (Currently, your backend allows all domains, so this should be fine).
*   **Database Connection**: Check Render logs to see if "MongoDB connected successfully" appears.
