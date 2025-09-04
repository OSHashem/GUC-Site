# GUC-Site

This project is a full-stack web application developed as part of our internship at the German University in Cairo (GUC). The application serves multiple roles and functionalities for different user types, including professors and admins. It provides a comprehensive system for managing evaluations,announcements, conferences, funds, complaints, and file links.

## Table of Contents

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Installation](#installation)

- [Environment Variables](#environment-variables)

- [Backend API Endpoints](#backend-api-endpoints)

<!-- - [Frontend Pages](#frontend-pages) -->

- [Contributing](#contributing)

---

## Features

- **Evaluation System**: Professors can evaluate teaching assistants (TAs) and manage feedback.
- **Announcements**: Users can create and manage important announcements.
- **Conferences and Funds**: Users can track and add conferences and funding opportunities.
- **Complaints System**: Professors can submit and track complaints.
- **File Links**: Users can manage and share important resource links.

---

## Technologies Used

### Frontend:

- **React (TypeScript)**: UI components built using React and TypeScript.

- **Vite**: Fast build tool for frontend.

- **Material-UI (MUI)**: For responsive and modern UI components.

- **React Router**: For routing and navigation.

- **Axios**: For making API requests.

### Backend:
- **Node.js (Express)**: Server-side framework for API and business logic.


- **MongoDB (Mongoose)**: Database used for storing data.

- **Vercel**: Used for deployment of the backend in a serverless environment.

- **Cors & Cookie-Parser**: Used for handling cross-origin requests and cookies.

---

## Installation

To get started with the project locally, follow these steps:

### Prerequisites
Ensure that you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (Running instance locally or a cloud MongoDB Atlas)
- **Vercel CLI** (Optional for deployment)

### 1. Clone the Repository
```bash
git clone https://github.com/OSHashem/GUC-Site.git
cd GUC-Site
```


### 2. Install Dependencies

- **Frontend**:
```bash
cd frontend
npm install
```

- **Backend**:
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a .env file for the backend to configure environment variables.

Example of the .env file:
```bash
PORT=5000
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-jwt-secret
CORS_ORIGIN=http://localhost:5173
```
Replace the placeholders with your actual MongoDB URI, JWT secret, and CORS origin.


### 4. Run the Application
- **Backend:**
```bash
cd backend
node server
```
- **Frontend:**
```bash
cd frontend
npm run dev
```
### 5. Access the Application
- Frontend is served at: http://localhost:5173

- Backend API is served at: http://localhost:4000/api


## Environment Variables

| Variable |      | Description                |
| :-------- | :------- | :------------------------- |
| `Port` |  | The port the server will run on
|`MONGO_URI`| | MongoDB connection string
|`JWT_SECRET`|| Secret key for JWT authentication

Make sure to set these values in the .env file.

---

## Backend API Endpoints
Here are some key backend API routes:

- **/api/instructor**: Instructor-related actions

- **/api/conference**: Manage conferences

- **/api/fund**: Manage funding opportunities

- **/api/filelink**: Manage resource links

- **/api/complaint**: Manage and submit complaints

- **/api/evaluationform**: Manage evaluation forms and feedback

- **/api/announcement**: Manage announcements

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request. For major changes, open an issue to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request
