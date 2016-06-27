import {ReferenceItem} from './classes';

class Encyclopedia extends ReferenceItem {

	constructor(newTitle: string, newYear: number, public edition: number){
		super(newTitle, newYear);
	}

	printItem():void{
		super.printItem();
		console.log(`Edition: ${this.edition} (${this.year})`);
	}

	printCitation(): void {

	}
}
