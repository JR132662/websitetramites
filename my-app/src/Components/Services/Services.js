import React from 'react';
import { Button, Heading2, TextWrapper } from '../../GlobalStyles';
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
		<IconContext.Provider value={{ color: 'red', size: '3rem' }}>
			<ServicesSection id="Services">
				<ServicesWrapper>
					<Heading2>Servicios Populares</Heading2>
					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						<p>Ayudamos con todos tipos de tramites de inmigracion</p>
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