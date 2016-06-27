import {Category} from "./enums";
import {Book, DamageLogger, Author, Librarian, Magazine} from './interfaces';
import {UniversityLibrarian, ReferenceItem} from "./classes";

import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunction';

import refBook from './encyclopedia';

import Shelf from "./self";

let reference = new refBook('Fact Book', 2013, 12);

let fee = CalcFee(5);
let max = MaxBooksAllowed(12);
function GetAllBooks(): Book[] {
	let books = [
		{ id:1, title: 'Ulysses', author:'James Joyce' , available: true, category: Category.Fiction},
		{id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
		{id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
		{id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
	];

	return books;

}

function LogFirstAvailable(books):void {
	let numberOfBooks :number = books.length;
	let firstAvailable :string = '';

	for (let currentBooks of books){
		
		if(currentBooks.available){
			firstAvailable = currentBooks.title;
			break;
		}
	}

	console.log('Total Books: '+ numberOfBooks);
	console.log('First Available: '+ firstAvailable);
}


function GetBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
	console.log('Getting books in category: '+Category[categoryFilter]);

	const allBooks = GetAllBooks();
	const filteredTitles: string[] = [];

	allBooks.forEach((d, i)=>{
		if(d.category == categoryFilter){
			filteredTitles.push(d.title);
		}
	});
	return filteredTitles;
}

function LogBookTitles(titles: string[]):void {
	titles.forEach((title, index) => console.log(index+" - "+title));
}

function GetBookByID(id: number): Book{
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string {
	return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
	console.log("Creating Customer "+name);

	if(age) {
		console.log("Age: "+age);
	}
	if(city) {
		console.log("City: "+city);
	}
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
	console.log('Checking out books for '+ customer);

	let booksCheckedOut: string[] = [];
	for(let id of bookIDs) {
		let book = GetBookByID(id);
		if(book.available) {
			booksCheckedOut.push(book.title);
		}
	}
	return booksCheckedOut; 
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
	const allBooks = GetAllBooks();
	const foundTitles: string[] = [];

	if(typeof bookProperty == 'boolean') {
		//get all books by particular author
		for(let book of allBooks) {
			if(book.available === bookProperty){
				foundTitles.push(book.title);
			}
		}
	}
	else if(typeof bookProperty == 'string') {
		//get all books by particular author
		for(let book of allBooks) {
			if(book.author === bookProperty){
				foundTitles.push(book.title);
			}
		}
	}
	return foundTitles;
}

function PringBook(book: Book):void {
	console.log(book.title + " id " + book.author);
}

//********************************
// let myBooks: string[] = CheckoutBooks('Hiron', 1,3,4);
// myBooks.forEach(title=> console.log(title););

// let hermansBooks = GetTitles('Herman Melville');
// hermansBooks.forEach(d => console.log(d));

// let x:number;

// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = CreateCustomerId;

// let myID: string = IdGenerator("Hiron", 4);
// console.log(myID);

// const fictionBooks = GetBookTitleByCategory();

// LogBookTitles(fictionBooks);

// let favoriteLibraian: Librarian = new UniversityLibrarian();

// favoriteLibraian.name = "Hiron Das";
// favoriteLibraian.assistCustomer("Suvash Das");

// let ref: ReferenceItem = new ReferenceItem('update Facts and Figures', 2016);

// ref.printItem();

// ref.publisher = 'Random Data publisher';
// console.log(ref.publisher);

/*let refBook = new Encyclopedia("WorldPedia", 2019, 10);
refBook.printItem();*/


let inventory: Array<Book> = [
	{ id:1, title: 'Ulysses', author:'James Joyce' , available: true, category: Category.Fiction},
	{id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},		
	{id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
	{id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
];

// let purgedBook: Array<Book> = Purge<Book>(inventory);

// purgedBook.forEach(book => console.log(book));

// let purgedNums: Array<number> = Purge<number>([1,2,3,4]);

// console.log(purgedNums);

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazine: Array<Magazine> = [
	{title: 'Programming Language Monthly', publisher: 'Code Nags'},
	{title: 'Literary Fiction Quarterly', publisher: 'College Press'},
	{title: 'Five Points', publisher: 'GSU'}
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazine.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();