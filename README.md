# Job Tracker

A full-stack job application tracker built with Next.js. Manage your job search with a visual Kanban board, drag-and-drop functionality, and secure authentication.

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Auth:** better-auth
- **UI:** shadcn/ui, Tailwind CSS 4, Lucide icons
- **Drag & Drop:** @dnd-kit

## Features

- User authentication (sign up / sign in)
- Kanban board with customizable columns
- Drag & drop job applications between stages
- Track applications from Applied to Offer
- Persistent data with MongoDB

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Install & Run

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── dashboard/        # Main dashboard with Kanban board
│   ├── sign-in/          # Sign in page
│   └── sign-up/          # Sign up page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── kanban-board.tsx  # Kanban board with drag & drop
│   ├── job-application-card.tsx
│   └── create-job-dialog.tsx
├── lib/
│   ├── auth/             # Auth configuration
│   ├── models/           # Mongoose schemas
│   ├── actions/          # Server actions
│   ├── hooks/            # React hooks
│   └── db.ts             # Database connection
└── public/               # Static assets
```
