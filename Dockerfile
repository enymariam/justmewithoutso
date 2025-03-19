# Phase 1: Frontend
FROM node:22.9.0 AS frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 

EXPOSE 3000

# Phase 2: Backend
FROM node:22.9.0 AS backend
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server ./server

# Phase 3: Final Image
FROM node:22.9.0
WORKDIR /app

COPY --from=frontend /app /app
RUN npm install
COPY --from=backend /app/server /app/server


WORKDIR /app/server
RUN npm install

WORKDIR /app
RUN npm install -g concurrently

EXPOSE 3000 5000

CMD ["npm", "start"]
