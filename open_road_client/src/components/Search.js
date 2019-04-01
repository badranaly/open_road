import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { SearchBarStyle, StyledInput } from './styles/BookListStyles';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	onChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	};
	render() {
		let results = [];
		if (this.props.data && this.props.data.books && this.state.search) {
			results = this.props.data.books.filter(book => {
				if (book.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1) {
					return book;
				}
			});
		}
		return (
			<SearchBarStyle>
				<StyledInput placeholder="Search for a book!" name="search" type="text" onChange={this.onChange} />
				<div>{results.length > 0 && <SearchResults results={results} />}</div>
			</SearchBarStyle>
		);
	}
}

export default Search;
