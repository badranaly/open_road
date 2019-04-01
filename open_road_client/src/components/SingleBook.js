import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { SingleBookStyle, SingleBookContainer, SingleBookImage, SingleBookHeaderStyle } from './styles/BookListStyles';
import { Link } from 'react-router-dom';

const SINGLE_BOOK_QUERY = gql`
	query SINGLE_BOOK_QUERY($id: String) {
		book(id: $id) {
			title
			image
			price
			primary_isbn
			publisher
			amazon_rank
		}
	}
`;

class SingleBook extends Component {
	render() {
		return (
			<Query query={SINGLE_BOOK_QUERY} variables={{ id: this.props.match.params.id }}>
				{({ loading, error, data }) => {
					if (loading) return <div>loading...</div>;
					if (error) return <div>something went wrong...</div>;
					const { title, image, price, primary_isbn, publisher, amazon_rank } = data.book;
					return (
						<div>
							<div style={{ top: '10%', left: '10%', position: 'absolute' }}>
								<Link to="/">{'<-'}Go Back</Link>
							</div>
							<SingleBookImage src={image} alt={title} />
							<SingleBookContainer>
								<SingleBookHeaderStyle>
									<div>Title</div>
									<div>Price</div>
									<div>Amazon rank</div>
									<div>Publisher</div>
									<div>Primary isbn</div>
								</SingleBookHeaderStyle>
								<SingleBookStyle>
									<div>{title}</div>
									<div>${price}</div>
									<div>{amazon_rank}</div>
									<div>{publisher}</div>
									<div>{primary_isbn}</div>
								</SingleBookStyle>
							</SingleBookContainer>
						</div>
					);
				}}
			</Query>
		);
	}
}

export default SingleBook;
