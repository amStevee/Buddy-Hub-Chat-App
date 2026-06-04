import http from 'node:http';
import app from './app.js'

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('server is running on port')
})