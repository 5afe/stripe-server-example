import dotenv from 'dotenv'
import routes from './src/router/router'
import Server from './src/server'

dotenv.config()

const { SERVER_PORT, FRONTEND_ORIGIN } = process.env
const DEFAULT_SERVER_PORT = '3001'
const allowedOrigins = FRONTEND_ORIGIN?.split(',')

const server = new Server()
server.configureCors(allowedOrigins)
server.registerRoutes(routes)
server.start(SERVER_PORT || DEFAULT_SERVER_PORT)
