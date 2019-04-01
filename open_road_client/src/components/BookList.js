import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
	List,
	ListContainer,
	ListItemContainer,
	HeaderContainer,
	FooterContainer,
	ImageStyles,
	TitleHover
} from '../components/styles/BookListStyles';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const GET_BOOKS_QUERY = gql`
	query GET_BOOKS_QUERY($pageNumber: Int, $limit: Int) {
		books(pageNumber: $pageNumber, limit: $limit) {
			title
			price
			publisher
			image
			_id
		}
	}
`;

class BookList extends Component {
	constructor() {
		super();
		this.state = {
			pageNumber: 1,
			singleBook: false,
			bookClicked: false
		};
	}
	onClick = e => {
		if (e.target.name === 'next') {
			this.setState({
				pageNumber: this.state.pageNumber + 1
			});
		} else {
			this.setState({
				pageNumber: this.state.pageNumber - 1
			});
		}
	};
	render() {
		const { pageNumber } = this.state;
		const limit = 10;
		const allBooks = this.props.data.books;
		return (
			<div>
				{this.state.bookClicked && <Redirect to={`/book/${this.state.id}`} />}
				<Query
					query={GET_BOOKS_QUERY}
					variables={{
						pageNumber: this.state.pageNumber,
						limit
					}}
				>
					{({ loading, error, data }) => {
						if (error) return <div style={{ left: '50%' }}>something went wrong...{console.log(error)}</div>;
						if (loading || !data || !allBooks) return <div style={{ left: '35%', position: 'absolute' }}>loading...</div>;
						return (
							<ListContainer>
								<HeaderContainer>
									<div>Title</div>
									<div>Publisher </div>
									<div>Price </div>
									<div>Cover</div>
								</HeaderContainer>
								{data.books &&
									data.books.map(book => (
										<ListItemContainer key={book._id}>
											<List>
												<Link
													to={{
														pathname: `/book/${book._id}`,
														bookId: book._id
													}}
												>
													<TitleHover>{book.title}</TitleHover>
												</Link>
											</List>
											<List>{book.publisher}</List>
											<List>${book.price}</List>
											<ImageStyles src={`${book.image}`} alt={`${book.title}`} />
										</ListItemContainer>
									))}

								<FooterContainer>
									<button style={{ marginLeft: '50px' }} onClick={this.onClick} name="prev" disabled={pageNumber === 1}>
										{'<'}
									</button>
									<p style={{ marginLeft: '50px', display: 'inline-block' }}>{pageNumber}</p>
									<button
										style={{ marginLeft: '50px' }}
										onClick={this.onClick}
										name="next"
										disabled={pageNumber * limit >= allBooks.length}
									>
										{'>'}
									</button>
								</FooterContainer>
							</ListContainer>
						);
					}}
				</Query>
			</div>
		);
	}
}

export default BookList;
