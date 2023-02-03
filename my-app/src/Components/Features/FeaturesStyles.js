import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(2.3rem, 13vw, 5.1rem);
	line-height: 1.06;
	letter-spacing: 0.1rem;
	margin: auto;
	color: black;

	@media screen and (max-width: 768px) {
		font-size: clamp(0.5rem, 13vw, 3.8rem);
	}
	
	@keyframes fadeinside {
		0% { opacity: 0; }
		100% { opacity: 1; }
	  }
`;
export const FeatureTitle2 = styled.h2`
	text-align: center;
	font-size: clamp(2.5rem, 13vw, 6.1rem);
	line-height: 1.06;
	margin: auto;
	color: red;
	
	@keyframes fadeinside {
		0% { opacity: 0; }
		100% { opacity: 1; }
	  }
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;


export const FeatureColumn= styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	background-image: linear-gradient(240deg, #CD1516 0%, #1D6ECE 100%);
    border-style: solid;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
	border: 1.8px solid black;
	&:hover {
		transform: scale(1.11);
		transition: all 0.3s ease-out;
	}
`;
	

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid white;
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 2rem;
	letter-spacing: 2px;
	color: white;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 5rem;
		letter-spacing: 1.3px;
		text-align: center;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: white;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;
export const FeatureText5 = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1.2rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: black;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;
export const ButtonFeature = styled.button`
	border-radius: 4px;
	margin: 5px;
	background: white;
	white-space: nowrap;
	padding: 10px 80px;
	font-size: 16px;
	color: black;
	outline: black;
	border: 2px solid black;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: rgba(8, 89, 217, 0.6);
	}
`;