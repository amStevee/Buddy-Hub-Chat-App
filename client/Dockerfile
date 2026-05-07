FROM node:v20.14.0

# Create user with permission to run the app
RUN addgroup app && adduser -S -G app app

# Set the user to run the app
USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

RUN pnpm install

COPY . .

EXPOSE 5173

CMD [ "pnpm", "start" ]