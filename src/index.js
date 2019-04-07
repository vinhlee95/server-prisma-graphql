/**
 * Root server file
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
// require dotenv
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const createServer = require('./createServer')
const db = require('./db')

// TODO: use express middleware to handle cookie (JWT)
const server = createServer()
server.express.use(cookieParser())

server.start({
	cors: {
		credentials: true,
		origin: process.env.FRONTEND_URL,
	}
}, (deets) => {
	console.log('Server is now running on port', deets.port)
})