import {Book, DamageLogger, Author, Librarian} from './interfaces';


class UniversityLibrarian implements Librarian {
	name: string;
	email: string;
	department: string;

	assistCustomer(custName: string) {
		console.log(this.name+' is assisting '+ custName);
	}
}

abstract class ReferenceItem{

	private _publisher: string;
	static department: string = 'Research';

	constructor(public title: string, protected year: number){
		console.log('Createing a new referenceItem...');

	}

	printItem(): void {
		console.log(`${this.title} was publish in ${this.year}.`);

		console.log(`Department: ${ReferenceItem.department}`);
	}

	get publisher():string {
		return this._publisher.toUpperCase();
	}

	set publisher(newPublisher: string) {
		this._publisher = newPublisher;
	}

	abstract printCitation():void;
}


export {UniversityLibrarian, ReferenceItem};
