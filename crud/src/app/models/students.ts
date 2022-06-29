export class Student {
	id?: string;
	names: String;
	lastnames: String;
	dni: number;
	dateOfBirth: Date;
	phone: String;
	creationDate: Date;
	updateDate: Date;

	constructor(
		names: String,
		lastnames: String,
		dateOfBirth: Date,
		dni: number,
		phone: String
	) {
		this.names = names;
		this.lastnames = lastnames;
		this.dateOfBirth = dateOfBirth;
		this.dni = dni;
		this.phone = phone;
		this.creationDate = new Date();
		this.updateDate = new Date();
	}
}
