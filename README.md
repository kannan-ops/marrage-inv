# React Admin Panel

This project is a React port of the PHP Admin Panel.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Structure

- `public/assets`: Static assets copied from the PHP project.
- `src/components`: Reusable UI components (Header, Sidebar, Footer).
- `src/layouts`: Layout wrappers (AdminLayout).
- `src/pages`: Page components (Login, Dashboard).
- `src/contexts`: React Context for state management (AuthContext).

## Authentication

Currently, the authentication is MOCKED for demonstration purposes.
- **Username**: `admin`
- **Password**: `admin`

## Backend

The original PHP project contained direct database connections. React is a client-side library and cannot connect to MySQL directly. 
To fully port the application, you will need to:
1. Create a backend API (Node.js/Express, Python/Django, or keep PHP as API).
2. Connect the React frontend to this API.
