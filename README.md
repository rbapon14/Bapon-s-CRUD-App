        >>> Bapon's CRUD Application <<<

> Project Description 

Bapon's CRUD Application is a full-stack application that allows users to perform Create, Read, Update, and Delete (CRUD) operations. The application is built using:
- Frontend: React
- Backend: Express.js
- Database: SQLite
- Other Tools and Libraries: Axios for HTTP requests, CORS middleware for cross-origin resource sharing.

This project demonstrates the seamless integration of a RESTful API with a React frontend, making it a perfect example for beginners and developers exploring full-stack development.

---

> Prerequisites 

Before setting up the project, ensure you have the following installed on your system:

1. Node.js (v14.0 or later)
   * Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. SQLite (for database management)
   * Download and install SQLite from [SQLite official website](https://www.sqlite.org/download.html).

3. DB Browser for SQLite (optional, for visualizing the database)
   * Download from [DB Browser for SQLite official website](https://sqlitebrowser.org/).

4. Git
   * Download and install Git from [Git official website](https://git-scm.com/).

---

> Installation Instructions 

# Clone the Repository

```bash
git clone https://github.com/rbapon14/Bapon-s-CRUD-App.git
cd Bapon-s-CRUD-App
```

> Backend Setup 

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

> Frontend Setup 

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

> Database Setup 

* The application uses SQLite for database storage. A default database file is already included in the `backend` directory.
* If you need to modify or inspect the database, use DB Browser for SQLite.

---

> Troubleshooting 

# Error: "pm : File C:\\Program Files\\nodejs\\npm.ps1 cannot be loaded because running scripts is disabled on this system."
If you encounter this error while running npm commands, it is caused by PowerShell's execution policy restricting scripts. To resolve this:

1. Open PowerShell as Administrator.
2. Run the following command to set the execution policy to unrestricted:
   ```bash
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
3. Confirm the action by typing `Y` and pressing Enter.
4. Retry running the npm commands.

For more information, refer to [Microsoft's documentation on execution policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy).

---

> Running the Application 

1. Ensure both the frontend and backend servers are running as described above.
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   This will load the React frontend connected to the Express.js backend.

---

> Features 

- Create: Add new records to the database.
- Read: View existing records.
- Update: Modify existing records.
- Delete: Remove records from the database.

---

> Future Enhancements 

- Implement user authentication and authorization.
- Add pagination for large datasets.
- Enhance UI with advanced CSS frameworks or libraries.

---

> Contributions 

Contributions are welcome! Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

---

Thank you for checking out Bapon's CRUD Application! If you have any issues or suggestions, feel free to open an issue in the GitHub repository.
