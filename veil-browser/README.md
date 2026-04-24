# 🛡️ Veil Browser

A privacy-focused web browser with AI-powered protection, built with Tauri, React, and Python.

## Features

- **Privacy First**: No tracking, no telemetry by default
- **Built-in Ad Blocker**: Block ads and trackers automatically
- **AI-Powered Analysis**: Real-time privacy risk assessment
- **Transparency Dashboard**: See exactly what's being blocked
- **Extreme Customization**: Full control over UI, themes, and behavior
- **Cross-Platform**: Windows, macOS, Linux support

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Rust (Tauri)
- **AI Service**: Python (FastAPI)
- **State Management**: Zustand
- **Package Manager**: pnpm

## Project Structure

```
veil-browser/
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── pages/              # Page components
│   ├── store/              # Zustand stores
│   └── services/           # API services
├── src-tauri/              # Rust backend
│   ├── src/
│   │   ├── commands/       # Tauri commands
│   │   ├── privacy/        # Privacy features
│   │   └── services/       # Backend services
│   └── tauri.conf.json
├── python-service/         # Python AI service
│   ├── app/
│   │   ├── routes/         # API endpoints
│   │   └── services/       # Business logic
│   └── requirements.txt
└── config/                 # Configuration files
```

## Getting Started

### Prerequisites

- Node.js 18+
- Rust 1.70+
- Python 3.9+
- pnpm

### Installation

```bash
# Install frontend dependencies
pnpm install

# Install Python dependencies
cd python-service
pip install -r requirements.txt

# Run development server
pnpm tauri dev
```

### Development

```bash
# Start frontend only
pnpm dev

# Start Tauri app
pnpm tauri dev

# Build for production
pnpm tauri build
```

## License

MIT License
