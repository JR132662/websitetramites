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
		description: '¡Gracias por su interés en nuestro servicio de Asilo. Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		icon: iconStyle(RiFilePaperFill),
		imgClass: 'one',
	},
	{
		name: 'Permiso de Trabajo',
		description: '¡Gracias por su interés en nuestro servicio de permiso de trabajo . Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		icon: iconStyle(FaHandsHelping),
		imgClass: 'two',
	},
	{
		name: 'Patronizeo',
		description: '¡Gracias por su interés en nuestro servicio de Patronizeo. Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		icon: iconStyle(GiBlackFlag),
		imgClass: 'three',
	},
	{
		name: 'Miedo Creible',
		description: '¡Gracias por su interés en nuestro servicio de miedo creible. Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		icon: iconStyle(MdDangerous),
		imgClass: 'four',
	},
	{
		name: 'Residencia',
		description: '¡Gracias por su interés en nuestro servicio de Residencia. Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		icon: iconStyle(FaHome),
		imgClass: 'five',
	},
	{	
		name2:'Jona',
		name: 'Visa',
		description: '¡Gracias por su interés en nuestro servicio de Visa. Nuestro equipo está disponible para responder cualquier pregunta que tenga y brindarle toda la información necesaria para tomar una decisión informada. ¡No espere más, contáctenos hoy mismo! Estamos aquí para ayudarlo.',
		imgClass: 'six',
	},
];