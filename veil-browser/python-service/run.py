#!/usr/bin/env python3
"""
Start the Veil Browser AI Service
"""
import uvicorn

if __name__ == "__main__":
    print("🚀 Starting Veil Browser AI Service...")
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
