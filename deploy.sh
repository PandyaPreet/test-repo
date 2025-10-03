#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$HOME/applications/auvqetfyvd/public_html"  
BRANCH="${BRANCH:-main}"
NODE_VERSION="${NODE_VERSION:-20}"
PORT="${PORT:-3000}"

# Load nvm (Cloudways-friendly)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd "$APP_DIR"

# Ensure repo is wired to origin (first run only)
if [ ! -d .git ]; then
  git init
  git remote add origin git@github.com:EnsureProtect/ep-newer-version.git   # e.g. git@github.com:org/repo.git
fi

# Get latest code
git fetch origin "$BRANCH"
git checkout -B "$BRANCH" "origin/$BRANCH"

# Build & (re)start
nvm install "$NODE_VERSION"
nvm use "$NODE_VERSION"
npm ci
npm run build

# Keep the app running
if pm2 describe nextjs >/dev/null 2>&1; then
  pm2 restart nextjs
else
  pm2 start npm --name nextjs -- run start -- -p "$PORT"
fi
pm2 save
echo "✅ Deploy finished: $(date)"
