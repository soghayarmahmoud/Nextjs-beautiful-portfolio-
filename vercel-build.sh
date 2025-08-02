#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Production build command
  echo "Running production build..."
  npm run build:production
else
  # Preview build command (default)
  echo "Running preview build..."
  npm run build:preview
fi