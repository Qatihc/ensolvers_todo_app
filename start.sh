#!/bin/bash
cd frontend
npm i
npm run build
cd ../backend
npm i
cd ..
npm run start