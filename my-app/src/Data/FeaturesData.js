import React from 'react';


import { RiFilePaperFill } from 'react-icons/ri';
import { FaPassport, FaHandsHelping } from 'react-icons/fa';
import { GiBlackFlag } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { MdDangerous } from 'react-icons/md';



const iconStyle = (Icon) => <Icon size="3rem" color="white" />;

export const FeaturesData = [
	{
		name: 'Asilo',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(RiFilePaperFill),
		imgClass: 'one',
	},
	{
		name: 'Permiso de Trabajo',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(FaHandsHelping),
		imgClass: 'two',
	},
	{
		name: 'Patronizeo',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GiBlackFlag),
		imgClass: 'three',
	},
	{
		name: 'Miedo Creible',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(MdDangerous),
		imgClass: 'four',
	},
	{
		name: 'Residencia',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(FaHome),
		imgClass: 'five',
	},
	{
		name: 'Visa',
		description:'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(FaPassport),
		imgClass: 'six',
	},
];