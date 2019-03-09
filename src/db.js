/**
 * Prisma binding
 * connects to the remote prisma DB and let us query it
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

const { Prisma } = require('prisma-binding')

const db = new Prisma({
	typeDefs: 'src/generated/prisma.graphql',
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
	debug: false,
})

module.exports = db