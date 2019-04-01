import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleBook from './components/SingleBook';
import './App.css';

//apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

const ALL_BOOKS_QUERY = gql`
	{
		books {
			title
			_id
		}
	}
`;

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Query query={ALL_BOOKS_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <div>loading...</div>;
						if (error) return <div>something went wrong...</div>;
						return (
							<Router>
								<Route
									exact
									path="/"
									component={() => {
										return <Home data={data} />;
									}}
								/>
								<Route exact path="/book/:id" component={SingleBook} />
							</Router>
						);
					}}
				</Query>
			</ApolloProvider>
		);
	}
}

export default App;
