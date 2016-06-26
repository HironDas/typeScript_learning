import {Book, DamageLogger, Author, Librarian} from './interfaces';


class UniversityLibrarian implements Librarian {
	name: string;
	email: string;
	department: string;

	assistCustomer(custName: string) {
		console.log(this.name+' is assisting '+ custName);
	}
}

class ReferenceItem{
	title: string;
	year: number;

	constructor(){
		console.log('Createing a new referenceItem...');
	}

	printItem(): void {
		console.log(`${this.title} was publish in ${this.year}.`);
	}
}

export {UniversityLibrarian, ReferenceItem};
