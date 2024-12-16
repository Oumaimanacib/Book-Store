# Book Store Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
The **Book Store Application** is a full-stack web application that allows users to manage a collection of books. Users can view, create, edit, and delete book records. The application is built with React for the frontend and Node.js with Express for the backend.

---

## Features
- **CRUD Operations**: Add, edit, delete, and view books.
- **Responsive Design**: Works seamlessly on different screen sizes.
- **User-friendly Interface**: Simple and intuitive UI for managing books.
- **Toast Notifications**: Feedback for user actions (e.g., success or error messages).
- **Reusable Components**: Modals for adding, editing, and confirming deletions.

---

## Tech Stack
### Frontend:
- React
- Tailwind CSS
- React Router
- React Toastify

### Backend:
- Node.js
- Express
- MongoDB (with Mongoose)

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- MongoDB (running locally or hosted)
- Git

### Clone the Repository
```bash
$ git clone https://github.com/yourusername/book-store.git
$ cd book-store
```

### Install Dependencies
#### Backend:
```bash
$ cd server
$ npm install
```

#### Frontend:
```bash
$ cd client
$ npm install
```

### Setup Environment Variables
#### Backend:
Create a `.env` file in the `server` directory with the following:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
```

#### Frontend:
No additional setup is required unless working with custom API URLs.

### Start the Application
#### Backend:
```bash
$ cd server
$ npm start
```

#### Frontend:
```bash
$ cd client
$ npm start
```

The application should now be running at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## Usage
1. **Add a Book**: Click the "Add Book" button and fill in the details.
2. **View a Book**: Click the view icon (eye) in the actions column.
3. **Edit a Book**: Click the edit icon (pencil), modify details, and save.
4. **Delete a Book**: Click the delete icon (trash), confirm deletion in the modal.

---

## API Endpoints
### Base URL: `http://localhost:5000/api/book`

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | `/`             | Get all books            |
| GET    | `/:id`          | Get a book by ID         |
| POST   | `/`             | Add a new book           |
| PUT    | `/:id`          | Update a book by ID      |
| DELETE | `/:id`          | Delete a book by ID      |

---

## Screenshots
### Home Page
![Home Page](path-to-screenshot-home.png)

### Add/Edit Modal
![Add/Edit Modal](path-to-screenshot-modal.png)

---

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

