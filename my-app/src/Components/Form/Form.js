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
import { useRef } from 'react';

const Form = () => {
	const form = useRef();
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
		  <FormColumn>
			<FormTitle>Enviar Mensaje</FormTitle>
			{/* <!-- contact form --> */}
			<FormWrapper ref={form} onSubmit={handleSubmit}>
			  {/* <!-- name --> */}
			  <FormInputRow>
				<FormLabel>Nombre</FormLabel>
				<FormInput
				  type="name"
				  name="name"
				  class="form-control"
				  id="name"
				  placeholder="enter your name"
				/>
			  </FormInputRow>
  
			  {/* <!-- phone --> */}
			  <FormInputRow>
				<FormLabel>Numero de Telefono</FormLabel>
				<FormInput
				  type="tel"
				  name="phone"
				  class="form-control"
				  id="phone"
				  placeholder="Numero de Telefono"
				/>
			  </FormInputRow>
  
			  {/* <!-- email --> */}
			  <FormInputRow>
				<FormLabel>Correo Electronico</FormLabel>
				<FormInput
				  type="email"
				  name="email"
				  class="form-control"
				  id="email"
				  placeholder="Correo Electronico"
				/>
			  </FormInputRow>
  
			  <FormInputRow>
				<FormLabel>Message</FormLabel>
				<FormInput
				  class="form-control"
				  name="message"
				  id="email_body"
				  rows="5"
				></FormInput>
			  </FormInputRow>
  
			  <FormButton type="submit" class="btn btn-primary">
				Enviar
			  </FormButton>
			</FormWrapper>
		  </FormColumn>
		</FormRow>
	  </Container>
	</FormSection>
	);
  }
  
  export default Form;
  