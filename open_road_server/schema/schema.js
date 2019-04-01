const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLBoolean } = graphql;
const books = require('../books-test-collection');
const _ = require('lodash');
const { bookLimit } = require('../utils/paginationUtils');

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		_id: { type: GraphQLString },
		role: { type: GraphQLInt },
		firebrand_role: { type: GraphQLString },
		firebrand_id: { type: GraphQLInt },
		display_name: { type: GraphQLString },
		first_name: { type: GraphQLString },
		last_name: { type: GraphQLString },
		slug: { type: GraphQLString }
	})
});

const transformedBooks = books['books'].map(book => {
	if (book._id && book._id.$oid) {
		book._id = book._id.$oid;
	}
	if (book.authors.length >= 1) {
		book.authors.map(author => {
			if (author._id && author._id.$oid) {
				author._id = author._id.$oid;
			}
		});
	}
	return book;
});

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		_id: { type: GraphQLString },
		title: { type: GraphQLString },
		authors: { type: new GraphQLList(AuthorType) },
		primary_isbn: { type: GraphQLString },
		amazon_rank: { type: GraphQLInt },
		active: { type: GraphQLBoolean },
		title: { type: GraphQLString },
		price: { type: GraphQLFloat },
		bookkey: { type: GraphQLInt },
		publisher: { type: GraphQLString },
		image: { type: GraphQLString },
		description: { type: GraphQLString }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get data from db or other source
				return _.find(transformedBooks, item => {
					return item._id === args.id;
				});
			}
		},
		books: {
			type: new GraphQLList(BookType),
			args: { pageNumber: { type: GraphQLInt }, limit: { type: GraphQLInt } },
			resolve(parent, args) {
				const allBooks = transformedBooks;
				if (args.limit > 0) {
					console.log(bookLimit(allBooks, args.limit, args.pageNumber));
					return bookLimit(allBooks, args.limit, args.pageNumber);
				} else {
					return transformedBooks.map(book => {
						return book;
					});
				}
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
