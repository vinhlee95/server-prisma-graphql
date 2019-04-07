/**
 * Resolvers for Mutations
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Mutations = {
	async createItem(parent, args, ctx, info) {
		const item = await ctx.db.mutation.createItem({
			data: {
				...args
			}
		}, info)

		return item

	},

	async signup(parent, args, ctx, info) {
		const email = args.email.toLowerCase()
		// hash password
		const password = await bcrypt.hash(args.password, 10)
		// create user
		const user = await ctx.db.mutation.createUser({
			data: {...args, email, password, permissions: { set: ['USER'] }}
		}, info)

		// create JWT token
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET )
		// set JWT as a cookie
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 365 * 86400 // 1 year cookie
		})

		// send user back to browser
		return user
	}
};

module.exports = Mutations;
