/**
 * Create GraphQL Yoga server
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

const { GraphQLServer } = require('graphql-yoga')
// Mutation and query
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
// Prisma DB
const db = require('./db')

// Create GraphQL Yoga server
function createServer() {
	return new GraphQLServer({
		typeDefs: 'src/schema.graphql',
		resolvers: {
			Mutation,
			Query,
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false,
		},
		context: req => ({ ...req, db })
	})
}

module.exports = createServer


