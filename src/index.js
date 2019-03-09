/**
 * Root server file
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
const path = require('path')
// require dotenv
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

// TODO: use express middleware to handle cookie (JWT)

server.start({
	cors: {
		credentials: true,
		origin: process.env.FRONTEND_URL,
	}
}, (deets) => {
	console.log('Server is now running on port', deets.port)
})