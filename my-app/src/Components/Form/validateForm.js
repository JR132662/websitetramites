export default function validateForm({ name, email, phone}) {
	if (!name.trim()) {
		return 'Name requirido';
	}
	if (!email.trim()) {
		return 'Correo electronico requirido';
	}
	if (!phone.trim()) {
		return 'Numero de telefono requirido';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	return null;
}