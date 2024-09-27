#!/bin/bash

docker exec -it tailwindcss bash -c "npx tailwindcss -i ./src/css/input.css -o ./build/public/css/style.css --watch"
