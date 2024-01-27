#!/bin/bash

current_branch="$(git rev-parse --abbrev-ref HEAD)"

echo ""
echo "Deploying branch: '$current_branch' to the production env with latest commit message: '$1'\n"
echo ""

git add . && git commit -m "$1" && git push	
