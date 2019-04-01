import React, { Component } from 'react';
import { SearchResultStyles, SearchResultContainerStyle, TitleHover } from './styles/BookListStyles';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
	render() {
		const validateResults = this.props.results && this.props.results.length > 0;
		return <SearchResultContainerStyle>{validateResults && <EachResult results={this.props.results} />}</SearchResultContainerStyle>;
	}
}

const EachResult = props =>
	props.results.map(result => (
		<SearchResultStyles key={result._id}>
			<Link to={`/book/${result._id}`}>
				<TitleHover>{result.title}</TitleHover>
			</Link>
		</SearchResultStyles>
	));

export default SearchResults;
