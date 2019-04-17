const quotes = [
{
name:'Stephen King',
quote:'Get busy living or get busy dying.'
},{
name:'Leo Tolstoy',
quote:'If you want to be happy, be.'
},{
name:'Linus Torvalds',
quote:'Talk is cheap. Show me the code.'
},{
name:'Kent Beck',
quote:'I am not a great programmer; I am just a good programmer with great habbits.'
},{
name:'Robert C. Martin',
quote:'Truth can only be found in one place: the code.'
},{
name:'Ted Nelson',	
quote:'Any fool can use a computer. Many do.'
},{
name:'John Johnson',
quote:'First, solve the problem. Then, write the code.'
},{
name:'Coco Chanel',
quote:'In order to be irreplaceable, one must always be different.'
},{
name:'Henry Bloch',
quote:'No matter how good an idea sounds, test it first.'
},{
name:'David Starr Jordan',
quote:'Wisdom is knowing what to do; virtue is doing it.'
},{
name:'Winston Churchill',
quote:'Without courage, all other virtues lose their meaning.'
},{
name:'Hugh White',
quote:'The past cannot be change. The future is yet in your power.'
}

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){

	let number = Math.floor(Math.random()*quotes.length);
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;
}