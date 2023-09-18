#!/bin/bash

#start
echo "Starting deployment..."

#replace this with the path of your project on the VPS
cd ~/cultus

# pull the latest changes
git pull origin main

# run docker-compose
# docker-compose up -d --build <-- in local, use this.
docker compose up -d --build

#end
echo "Deployment finished!"