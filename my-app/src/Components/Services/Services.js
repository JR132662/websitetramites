import React from 'react';
import { Button, Heading, TextWrapper } from '../../GlobalStyles';
import { IconContext } from 'react-icons/lib';
import {
	ServicesSection,
	ServicesWrapper,
	ServicesContainer,
	ServicesCardInfo,
	ServicesCardPlan,
	ServicesCardCost,
	ServicesCardFeatures,
	ServicesCardText,
	ServicesCardFeature,
	ServicesCard,
} from './ServicesStyles';
import { ServicesData } from '../../Data/ServicesData';

function Services() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<ServicesSection id="Services">
				<ServicesWrapper>
					<Heading>Pick Your Best Option</Heading>
					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Create, maintain and store your data with Delta.
					</TextWrapper>
					<ServicesContainer>
						{ServicesData.map((card, index) => (
							<ServicesCard key={index}>
								<ServicesCardInfo>
									<ServicesCardPlan>{card.title}</ServicesCardPlan>
									<ServicesCardCost>{card.price}</ServicesCardCost>
									<ServicesCardText>{card.description}</ServicesCardText>
									<ServicesCardFeatures>
										{card.features.map((feature, index) => (
											<ServicesCardFeature key={index}>
												{feature}
											</ServicesCardFeature>
										))}
									</ServicesCardFeatures>
									<Button>Get Started</Button>
								</ServicesCardInfo>
							</ServicesCard>
						))}
					</ServicesContainer>
				</ServicesWrapper>
			</ServicesSection>
		</IconContext.Provider>
	);
}
export default Services;