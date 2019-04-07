const { forwardTo } = require('prisma-binding')

const Query = {
	items: forwardTo('db'),
	itemsConnection: forwardTo('db'),
};

module.exports = Query;
