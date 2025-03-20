# Phase 1: Frontend
FROM node:alpine AS frontend
WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 

EXPOSE 3000

# Phase 2: Backend
FROM node:alpine AS backend
WORKDIR /app/server
COPY server ./server

# Phase 3: Final Image
FROM node:alpine
WORKDIR /app

COPY --from=frontend /app /app
RUN npm install
COPY --from=backend /app/server /app/server

EXPOSE 3000 5000

CMD ["npm", "start"]
