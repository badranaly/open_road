const express = require('express');
const books = require('./books-test-collection.json');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const port = process.env.port || 5000;

//allow x-origin requests
app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema, //schema: schema
		graphiql: true
	})
);

app.get('/books', (req, res) => {
	res.json(books);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
