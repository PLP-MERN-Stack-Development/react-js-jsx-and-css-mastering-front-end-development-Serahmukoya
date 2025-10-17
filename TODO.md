# Week 3 React App Completion Plan

## Tasks to Complete
- [x] Create Card.jsx: Reusable Card component for content display
- [x] Create Navbar.jsx: Navigation component with theme toggle button
- [x] Create Footer.jsx: Footer with links and copyright
- [x] Create Layout.jsx: Wrapper component including Navbar and Footer
- [x] Create ThemeContext.jsx: Context for light/dark mode using useContext
- [x] Create ApiData.jsx: Component to fetch from JSONPlaceholder API, display posts with loading/error states, search, and pagination
- [x] Update App.jsx: Integrate Layout, replace counter with TaskManager, add ApiData section
- [x] Run npm run dev to start the app
- [ ] Test responsiveness on different screen sizes
- [ ] Verify theme switching, task management, and API functionality
- [ ] Add MongoDB integration for task persistence
  - [x] Install backend dependencies (express, mongoose, cors, dotenv)
  - [x] Create server.js for Express backend
  - [x] Create Task model with Mongoose
  - [x] Create API routes for tasks (GET, POST, PUT, DELETE)
- [x] Update TaskManager to use API instead of localStorage
- [x] Configure proxy for API calls in Vite
  - [x] Add environment variables for MongoDB connection
