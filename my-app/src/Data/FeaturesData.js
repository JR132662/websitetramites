import React from 'react';


import { RiFilePaperFill } from 'react-icons/ri';
import { FaPassport, FaHandsHelping } from 'react-icons/fa';
import { GiBlackFlag } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { MdDangerous } from 'react-icons/md';



const iconStyle = (Icon) => <Icon size="4rem" color="white" />;

export const FeaturesData = [
	{
		name: 'Asilo',
		description: 'Nosotros ofrecemos ayuda con los tramites de Asilo.',
		icon: iconStyle(RiFilePaperFill),
		imgClass: 'one',
	},
	{
		name: 'Permiso de Trabajo',
		description: 'Nosotros ofrecemos ayuda con Permiso de trabajo',
		icon: iconStyle(FaHandsHelping),
		imgClass: 'two',
	},
	{
		name: 'Patronizeo',
		description: 'Patronizea tu familiar con 5 estrellas. te ayudmaos traer tu ser querido',
		icon: iconStyle(GiBlackFlag),
		imgClass: 'three',
	},
	{
		name: 'Miedo Creible',
		description: 'Nuestro equipo te ayuda con los tramites de Miedo Creible',
		icon: iconStyle(MdDangerous),
		imgClass: 'four',
	},
	{
		name: 'Residencia',
		description: 'Sabemos como submitir la aplicacion de residencia. tenemos el servicio y precio mejor del mercado',
		icon: iconStyle(FaHome),
		imgClass: 'five',
	},
	{
		name: 'Visa',
		description:'aplica por tu visa con 5 estrellas. tenemos el servicio y precio mejor del mercado',
		icon: iconStyle(FaPassport),
		imgClass: 'six',
	},
];