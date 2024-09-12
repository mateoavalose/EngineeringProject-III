# Lab Scheduling Web Application

## Project Description
This project aims to develop a web application for students and professors of the Systems and Computer Engineering program at **Universidad EIA**. The application allows users to select and book times for using configuration and development labs. The system will include a login feature to ensure the authenticity of users through a username and password. The application must be user-friendly, secure, and accessible from any device with an internet connection.

## Key Features
### 1. User Registration and Authentication
- Registration system for new users with data validation (first name, last name, email, username, and password).
- Login system for registered users using a username and password.
- Password recovery via email.

### 2. Schedule Management and Reservations
- View available lab schedules.
- Ability to select and book available times.
- Cancel or modify existing reservations.
- Email notifications for booking confirmations and reminders.

### 3. Admin Panel
- User management (create, edit, and delete accounts).
- Management of lab schedules and availability.
- Reports generation on lab usage.

## Technical Requirements
### 1. Frontend
- Developed using **React.js** or **Next.js**.
- Responsive and accessible user interface.
- Real-time validation in registration and login forms.

### 2. Backend
- Developed using **Node.js** and **Nest.js**.
- **PostgreSQL** database to store user information, schedules, and reservations.
- **REST API** for communication between frontend and backend.
- **JWT (JSON Web Tokens)** for secure authentication.

### 3. Security
- Password hashing using **bcrypt**.
- Protection against brute force attacks and SQL injection.
- Input validation and sanitization.

### 4. Deployment and Hosting
- Deployment on **AWS** or **Heroku**.
- **SSL certificate** for secure HTTPS connections.
