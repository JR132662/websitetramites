import React, { useEffect } from 'react';
import { Container,  Section } from '../../GlobalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles.js';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { HeroButton } from '../Hero/HeroStyles';

export const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
	headline2
}) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline2}
							</Heading>
							<Subtitle
								initial={initial}
								transition={{ delay: 0.7, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{description}
							</Subtitle>
							<HeroButton
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								{buttonLabel}
							</HeroButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<ImgWrapper>
							<Img
								src={img}
								alt={alt}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}
							/>
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};