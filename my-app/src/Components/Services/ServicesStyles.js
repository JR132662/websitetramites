import styled from 'styled-components';

export const ServicesSection = styled.div`
	padding: 80px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #0A3161;
`;

export const ServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const ServicesContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const ServicesCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const ServicesCardInfo = styled.div`
	background: white;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color: black;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const ServicesCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
	text-align:center;
`;

export const ServicesCardCost = styled.h4`
	font-size: 1.2rem;
`;

export const ServicesCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const ServicesCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: black;
`;

export const ServicesCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
	justify-content: center;

	&:before {
		margin-right: 0.4rem;
	}
`;