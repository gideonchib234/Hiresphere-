# Hiresphere

A comprehensive full-stack job portal web application designed to connect employers with talented job seekers. Hiresphere provides a seamless platform for posting job opportunities, managing applications, and discovering career opportunities with an intuitive and responsive user interface.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### For Employers
- **Job Posting Management** - Create, edit, and manage job listings
- **Application Tracking** - View and track all incoming applications
- **Candidate Management** - Review candidate profiles and applications
- **Profile Management** - Customize employer/company profile

### For Job Seekers
- **Job Search** - Browse and search available job opportunities
- **Saved Jobs** - Save jobs for later viewing
- **Application Management** - Track submitted applications
- **Profile Management** - Create and maintain professional profile
- **Resume Upload** - Upload and manage resumes

### General Features
- **User Authentication** - Secure JWT-based authentication
- **Email Notifications** - OTP verification and email communications
- **Responsive Design** - Mobile-friendly interface using React
- **File Upload** - Resume and profile image uploads
- **Analytics** - Application and user analytics dashboard

---

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose ODM (v9.2.1)
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Security**: Bcrypt for password hashing (v6.0.0)
- **File Upload**: Multer (v2.0.2)
- **Email**: EJS templates for email rendering
- **Utilities**: Morgan (logging), CORS, Dotenv (environment configuration)

### Frontend
- **Framework**: React (v19.2.0)
- **Build Tool**: Vite (v5.0.0)
- **Routing**: React Router DOM (v7.13.0)
- **Styling**: CSS with responsive design
- **Animations**: Framer Motion (v12.30.0)
- **UI Components**: Lucide React icons (v0.563.0)
- **Notifications**: React Hot Toast (v2.6.0)
- **State Management**: React Context API (authcontext.jsx)

---

## 📁 Project Structure

```
Hiresphere/
├── Backend/                          # Node.js Express server
│   ├── controllers/                  # Request handlers
│   │   ├── Analytics-controller.js
│   │   ├── application-controller.js
│   │   ├── authcontroller.js
│   │   ├── job-controller.js
│   │   ├── Savedjobscontroller.js
│   │   └── usercontrollers.js
│   ├── models/                       # Mongoose schemas
│   │   ├── Analytics.js
│   │   ├── Application.js
│   │   ├── job.js
│   │   ├── savedjobs.js
│   │   └── user.js
│   ├── routes/                       # API routes
│   │   ├── analyticsRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── authRoutes.js
│   │   ├── JobRoutes.js
│   │   ├── SavedJobsRputes.js
│   │   └── UserRoutes.js
│   ├── middleware/                   # Express middleware
│   │   ├── Authmiddleware.js
│   │   └── uploadmiddleware.js
│   ├── database/                     # Database configuration
│   │   └── db.js
│   ├── utils/                        # Utility functions
│   │   └── mailer.js                 # Email sending functionality
│   ├── views/                        # Email templates
│   │   └── otp_email.ejs
│   ├── Uploads/                      # File storage directory
│   ├── package.json
│   └── server.js                     # Entry point
│
└── frontend/
    └── Hiresphere-portal/            # React + Vite application
        ├── src/
        │   ├── Pages/                # Page components
        │   │   ├── Auth/
        │   │   │   ├── Login.jsx
        │   │   │   ├── signup.jsx
        │   │   │   ├── ForgotPassword.jsx
        │   │   │   └── ResetPassword.jsx
        │   │   ├── Employer/
        │   │   │   ├── Employerdashboard.jsx
        │   │   │   ├── jobpostingform.jsx
        │   │   │   ├── ManageJobs.jsx
        │   │   │   ├── ApplicationViewer.jsx
        │   │   │   ├── Employerprofile.jsx
        │   │   │   └── EditprofileDetail.jsx
        │   │   ├── Jobseeker/
        │   │   │   ├── jobseekerDashboard.jsx
        │   │   │   ├── JobseekerDetails.jsx
        │   │   │   ├── Savedjobs.jsx
        │   │   │   ├── Userprofile.jsx
        │   │   │   └── components/
        │   │   └── Landingpage/
        │   │       ├── landingPage.jsx
        │   │       └── components/
        │   │           ├── header.jsx
        │   │           ├── herosection.jsx
        │   │           ├── features.jsx
        │   │           ├── Analytics.jsx
        │   │           └── footer.jsx
        │   ├── context/
        │   │   └── authcontext.jsx   # Authentication context
        │   ├── Routes/
        │   │   └── ProtectedRoutes.jsx
        │   ├── Utils/
        │   │   ├── Apipaths.js       # API endpoint configuration
        │   │   ├── Axiosinstance.js  # Axios setup
        │   │   ├── data.js           # Static data
        │   │   ├── helper.js         # Helper functions
        │   │   └── uploadimage.js    # Image upload utility
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── index.css
        ├── public/
        ├── package.json
        ├── vite.config.js
        ├── eslint.config.js
        └── index.html
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (Local or MongoDB Atlas account)
- **Git** for version control

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Hiresphere.git
cd Hiresphere
```

### 2. Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create .env file (see Configuration section)
# Add your environment variables
```

### 3. Frontend Setup

```bash
cd frontend/Hiresphere-portal

# Install dependencies
npm install
```

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `Backend/` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/hiresphere
# Or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hiresphere

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_SERVICE=gmail

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./Uploads
```

### Frontend Configuration

Update the API paths in `frontend/Hiresphere-portal/src/Utils/Apipaths.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

## 🏃 Running the Application

### Backend Server

```bash
cd Backend

# Development mode (with nodemon auto-reload)
npm run dev

# Production mode
npm start

# Server will run on http://localhost:5000
```

### Frontend Application

```bash
cd frontend/Hiresphere-portal

# Development mode
npm run dev

# Build for production
npm build

# Preview production build
npm run preview

# Frontend will run on http://localhost:5173
```

### Running Both Simultaneously

You can use two terminal windows or use a tool like `concurrently`:

```bash
# Install concurrently globally (optional)
npm install -g concurrently

# From root directory
concurrently "cd Backend && npm run dev" "cd frontend/Hiresphere-portal && npm run dev"
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `POST /forgot-password` - Request password reset
- `POST /reset-password` - Reset password with token
- `POST /verify-otp` - Verify OTP

### User Routes (`/api/user`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `PUT /profile/avatar` - Upload profile picture
- `DELETE /profile` - Delete account

### Job Routes (`/api/jobs`)
- `GET /` - Get all jobs
- `GET /:id` - Get job details
- `POST /` - Create job (Employer only)
- `PUT /:id` - Update job (Employer only)
- `DELETE /:id` - Delete job (Employer only)

### Application Routes (`/api/applications`)
- `GET /` - Get applications
- `POST /` - Submit application
- `PUT /:id` - Update application status
- `GET /:jobId` - Get applications for job

### Saved Jobs Routes (`/api/savedjobs`)
- `GET /` - Get saved jobs
- `POST /` - Save job
- `DELETE /:id` - Remove saved job

### Analytics Routes (`/api/analytics`)
- `GET /dashboard` - Get analytics dashboard
- `GET /applications` - Get application analytics
- `GET /jobs` - Get job posting analytics

---

## 🏗 Project Architecture

### Backend Architecture

**MVC Pattern**
- **Models**: Mongoose schemas for data structure
- **Controllers**: Business logic for each feature
- **Routes**: API endpoints mapping
- **Middleware**: Authentication, file upload, error handling

**Data Models**
- **User**: Stores user information (job seekers and employers)
- **Job**: Job postings with requirements and details
- **Application**: Job applications submitted by seekers
- **SavedJobs**: Bookmarked jobs by job seekers
- **Analytics**: Aggregated data for dashboards

### Frontend Architecture

**Component Structure**
- **Pages**: Full-page components for different routes
- **Components**: Reusable UI components
- **Context**: Global state management (authentication)
- **Routes**: Protected and public routes
- **Utils**: API integration and helper functions

**Authentication Flow**
- Login/Register through `/auth` routes
- JWT token stored in localStorage
- Token validated via `ProtectedRoutes` component
- Axios interceptor adds token to requests

---

## 🧪 Testing

Run linting and code quality checks:

```bash
# Frontend
cd frontend/Hiresphere-portal
npm run lint

# Backend (if configured)
cd Backend
npm test
```

---

## 📝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Code Standards
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Test your changes before submitting

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env` file
- Verify network access if using MongoDB Atlas

**Port Already in Use**
- Change `PORT` in `.env`
- Or kill the process using the port: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)

### Frontend Issues

**Dependencies Not Installing**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Vite Dev Server Not Starting**
- Check if port 5173 is available
- Update `vite.config.js` to use different port if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Support

For questions or issues, please:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

## 🙌 Acknowledgments

- Built with React and Express.js
- UI powered by Framer Motion and Lucide React
- Icons and notifications via React Hot Toast
- Database by MongoDB and Mongoose

---

**Happy coding! 🚀**
