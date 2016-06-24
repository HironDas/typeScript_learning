function GetAllBooks() {
	let books = [
		{title: 'Ulysses', author:'James Joyce' , available: true, category: Category.Fiction},
		{title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
		{title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
		{title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
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

enum Category { BioGraphy, Poetry, Fiction, History, Children };

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
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
	titles.forEach((title) => {
		console.log(title);
	});
}

const fictionBooks = GetBookTitleByCategory(Category.Fiction);

LogBookTitles(fictionBooks);