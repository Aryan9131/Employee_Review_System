# Employee_Review_System
This is an application that allows employees to submit feedback toward each other’s performance .

## Overview
EMS (Employee Management System) is a web-based application developed by Aryan Nayak for managing employee feedback within an organization. The system allows administrators to assign employees to provide feedback to their peers. Employees can log in to the system, view assigned feedback tasks, and submit feedback for their assigned colleagues.

## Features
- **Admin Features:**
  - Assign employees to provide feedback to others.
  - Delete employees from the system.
  - Manage user accounts (Create, Read, Update, Delete).

- **Employee Features:**
  - View assigned feedback tasks.
  - Submit feedback for assigned colleagues.
  - Access a personalized homepage displaying feedback received.

## Technology Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose ODM
  - Passport.js for authentication

- **Frontend:**
  - EJS (Embedded JavaScript) for views
  - HTML, CSS, and JavaScript for the user interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Employee_Review_System.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Employee_Review_System
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following configurations:
   ```env
   DATABASE_URL=<your-mongodb-atlas-url>
   SECRET_KEY=<your-secret-key>
   ```
5. Start the application:
   ```bash
   npm start
   ```
   The application will be accessible at [http://localhost:8000](http://localhost:8000).
   
## Database Setup
The application uses MongoDB for data storage. Ensure you have a MongoDB database set up, and update the `DATABASE_URL` in the `.env` file.

## Usage

1. Open your web browser and navigate to [http://localhost:8000](http://localhost:8000).
2. Admin Login:
   - Username: admin@example.com
   - Password: admin123
3. Create employee accounts using the admin interface.
4. Employees can log in using their credentials and access the assigned feedback tasks.
5. Admin can assign feedback tasks to employees and manage the system.

## Contributors
- Aryan Nayak

## Acknowledgments

- Special thanks to the open-source community and libraries used in building this application.

Feel free to explore and enhance the EMS application! If you encounter any issues or have suggestions for improvement, please create an issue on the GitHub repository. Happy coding!
