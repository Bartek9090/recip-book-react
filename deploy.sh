#!/bin/bash



current_branch="$(git rev-parse --abbrev-ref HEAD)"

echo "Deploying branch: '$current_branch' to the production env with commit message: '$1'"
git add . && git commit -m "$1" && git push	

