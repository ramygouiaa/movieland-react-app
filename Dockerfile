FROM node:18-alpine
WORKDIR /react-movieland/
COPY src/ /react-movieland/src
COPY index.html /react-movieland/
COPY package.json /react-movieland/
COPY vite.config.js /react-movieland/

RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 5173