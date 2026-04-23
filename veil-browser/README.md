# Veil Browser

A modern, privacy-focused web browser inspired by DuckDuckGo, with extreme customization and user control.

## 🛡️ Core Features

- **Privacy-first**: No tracking, no telemetry, built-in ad & tracker blocker
- **Extreme Customization**: Full UI control, configurable search engines, modular features
- **Advanced User Control**: Granular permissions, real-time visibility, enhanced DevTools
- **High Performance**: Lightweight, efficient memory usage, multi-process architecture
- **Security**: Sandboxing, automatic HTTPS, malicious site warnings
- **Cross-platform**: Windows, macOS, Linux, Android, iOS

## 🏗️ Architecture

```
veil-browser/
├── python-service/          # AI Brain (FastAPI + ML analysis)
├── src-tauri/               # Rust Backend (Tauri)
├── src/                     # React Frontend
├── config/                  # Configuration files
├── extensions/              # Extension support
├── scripts/                 # Development scripts
├── docs/                    # Documentation
└── assets/                  # Icons and logos
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Rust 1.70+
- Python 3.10+

### Installation

```bash
# Install dependencies
npm install

# Start development server
./scripts/dev.sh
```

## 📖 Documentation

See [docs/architecture.md](docs/architecture.md) for detailed architecture information.

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Backend**: Rust + Tauri
- **AI Service**: Python + FastAPI
- **State Management**: Zustand
- **Styling**: CSS Modules / Styled Components

## 📄 License

MIT
