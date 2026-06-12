```
chat-app/
├── client/                  # Frontend (Vanilla javaScript + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/
│   │   ├── styles/
│   │   └── index.html
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
