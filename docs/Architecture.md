```
chat-app/
├── client/                  # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images, icons
│   │   ├── components/      # Reusable UI components
│   │   ├── features/        # Chat, Auth, etc.
│   │   ├── pages/           # Routes / screens
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API calls
│   │   ├── store/           # State management
│   │   ├── utils/           # Helper functions
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
├── server/                  # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/          # DB config, environment setup
│   │   ├── core/            # helper function
│   │   ├── api/             # version API routes
│   │   ├── modules/         # e.g User/(route, controller, servises, repository, dto)
│   │   ├── middlewares/     # Auth, validation, etc.
│   │   ├── test/            # unit tests
│   │   ├── sockets/         # WebSocket / Socket.io logic
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── docs/                    # Project documentation
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   └── CONTRIBUTING.md
│
├── .github/
│   ├── workflows/           # CI/CD pipelines
│   │   └── ci.yml
│   └── ISSUE_TEMPLATE/
│
├── .env.example             # Example environment variables
├── .gitignore
├── docker-compose.yml
├── package.json             # Root (monorepo scripts)
└── README.md
```
