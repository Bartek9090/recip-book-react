#!/bin/bash

current_branch="$(git rev-parse --abbrev-ref HEAD)"

echo "\nDeploying branch: '$current_branch' to the production env with latest commit message: '$1'\n"
git add . && git commit -m "$1" && git push	
