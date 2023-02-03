import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: white;

	&:before {
		background: black;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: red;
	}
    border: 1px solid white;
	background-color: transparent;
    background-image: linear-gradient(240deg, #CD1516 0%, #1D6ECE 100%);

	font-size: clamp(0.5rem, 13vw, 1.8rem);

	@media screen and (max-width: 768px) {
		font-size: clamp(1.5rem, 13vw, 1.5rem);
	}
`;
export const HeroDiv = styled.div`
	display: flex;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
		align-content: center;
	}
`;
export const HeroDiv2 = styled.div`
@media screen and (max-width: 960px) {
	padding: 0 30px;
	display: inline-flex;
}
`;