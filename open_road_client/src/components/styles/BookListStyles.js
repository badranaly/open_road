import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: grid;
	grid-template-columns: 300px 300px 300px 100px;
	margin-bottom: 20px;
	font-size: 20px;
	color: blue;
	font-weight: 700;
`;

export const ListContainer = styled.div.attrs({
	className: 'title'
})`
	top: 60%;
	left: 10%;
	position: absolute;
	height: 100%;
	width: 80%;
	margin: -300px 0 0 0;
	text-align: center;
`;

export const ListItemContainer = styled.div`
	display: grid;
	grid-template-columns: 300px 300px 300px 300px;
	grid-template-rows: 50px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;

export const List = styled.div`
	font-family: 'Denk One';
`;

export const TitleHover = styled.div`
	font-size: 18px;
	color: black;
	&:hover {
		font-size: 22px;
		color: red;
	}
`;

export const SearchResultStyles = styled.div`
	background: #e2ffbb;
	z-index: 1;
	padding: 5px;
	font-family: 'Denk One';
	&:hover {
		color: blue;
		cursor: pointer;
	}
`;

export const SearchResultContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 200px;
	overflow-y: scroll;
	width: 520px;
	border-radius: 5px;
`;

export const SearchBarStyle = styled.div`
	position: absolute;
	top: 10%;
	left: 50%;
	position: absolute;
	margin: 0 0 0 -200px;
	border-radius: 20px solid black;
`;

export const StyledInput = styled.input`
	border-radius: 10px;
	height: 20px;
	width: 500px;
	background: white;
	outline: none;
	padding: 10px;
	font-size: 20px;
`;

export const FooterContainer = styled.footer`
	display: grid;
	grid-template-columns: 300px 300px 300px;
	grid-template-rows: 30px;
	justify-items: end;
`;

export const ImageStyles = styled.img`
	height: 30px;
	width: 30px;
`;

export const SingleBookContainer = styled.div`
	top: 50%;
	left: 45%;
	height: 100%;
	width: 100%;
	position: absolute;
	margin: 0px 0 0 -500px;
`;

export const SingleBookStyle = styled.div`
	display: grid;
	grid-template-columns: 300px 200px 200px 300px 200px;
	grid-template-rows: 10px 10px 10px 10px 10px;
`;

export const SingleBookHeaderStyle = styled.div`
	display: grid;
	grid-template-columns: 300px 200px 200px 300px 200px;
	grid-template-rows: 10px 10px 10px 10px 10px;
	font-size: 20px;
	font-weight: 700;
	color: blue;
`;

export const SingleBookImage = styled.img`
	height: 200px;
	width: 200px;
	position: absolute;
	top: 20%;
	left: 50%;
	margin: -100px 0 30px -100px;
`;
