import React, { useState } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import { Container } from '../../GlobalStyles';
import validateForm from './validateForm';
import { MdSettingsPhone } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, phone, message });
		emailjs.sendForm('service_onmijpu', 'template_n481uuj', e.target, 'oy5ti2Ey8N7FnA54N')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPhone('');
		setMessage('');
		setError(null);
		setSuccess('Application was submitted!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};


	const formData = [
		{ 
		name:"User",		
		label: 'Name', 
		value: name,  
		onChange: (e) => setName(e.target.value),
		 type: 'text'},

		{ label: 'Email',
			value: email,
			onChange: (e) => setEmail(e.target.value),
				type: 'email'},
		{ label: 'Phone Number',
			value: phone,
			onChange: (e) => setPhone(e.target.value),
				type: 'tel'},
		{ label: 'Mande un mensaje',
			value: message,
			onChange: (e) => setMessage(e.target.value),
		type: 'text'},
		
		
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Envia un Mensaje</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={` ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}
							<FormButton type="submit">Enviar</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;