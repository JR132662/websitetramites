import React from 'react';
import { Container, Section, Button } from '../../GlobalStyles'
import {
	FeatureText,
	FeatureText5,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
	FeatureTitle2,
	FeatureText2,
	ButtonFeature,
} from './FeaturesStyles';
import { FeaturesData } from '../../Data/FeaturesData';



const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle2>305-632-4462</FeatureTitle2>
					<FeatureTitle>Servicios de Inmigracion</FeatureTitle>
					<FeatureText5>Si estás buscando asistencia con sus documentos de inmigración, ¡estamos aquí para ayudarlo! Contáctenos para obtener información y ayuda con todos sus requisitos de inmigración. Con años de experiencia y un equipo de expertos, garantizamos un proceso sin estrés y eficiente para todas sus necesidades de documentación de inmigración.</FeatureText5>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{FeaturesData.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
							<ButtonFeature>Contacto</ButtonFeature>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;