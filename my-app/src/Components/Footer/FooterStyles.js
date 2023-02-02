import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../GlobalStyles'

export const FooterContainer = styled.div`
	background: rgba(8, 89, 217, 0.6);
	padding: 4rem 0 2rem 0;
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled(Column)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;

	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 40px;
`;

export const FooterRights = styled.div`
	color: #fff;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid #2d3748;
	padding: 1rem 0;
	margin: 1rem 0 0;
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 24px;
`;

export const FooterAddress = styled.div`
	color: white;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;

	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
`;
export const Section2 = styled.section`
padding: ${({ padding }) => (padding ? padding : '140px 0')};
margin: ${({ margin }) => (margin ? margin : '')};
background-color: transparent;
background-image: linear-gradient(240deg, #CD1516 0%, #1D6ECE 100%);
position: ${({ position }) => (position ? position : '')};
width: ${({ width }) => (width ? width : 'auto')};
min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
height: ${({ height }) => (height ? height : 'auto')};
max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
@media screen and (max-width: 768px) {
	padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;