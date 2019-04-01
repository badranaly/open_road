import React from 'react';
import Search from './Search';
import BookList from './BookList';

const Home = props => (
	<div>
		<Search data={props.data} />
		<BookList data={props.data} />
	</div>
);

export default Home;
