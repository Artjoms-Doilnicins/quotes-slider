const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const nameEl = document.querySelector('.name');

const quotes = [
	{
		photoUrl: 'img/eleanor-roosevelt.jpg',
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		name: 'Eleanor Roosevelt',
	},
	{
		photoUrl: 'img/colin-powell.jpg',
		text: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.',
		name: 'Colin Powell',
	},
	{
		photoUrl: 'img/barack-obama.jpg',
		text: 'The real test is not whether you avoid this failure, because you won‘t.',
		name: 'Barack Obama',
	},
];

let i = 0;

const updateQuotes = () => {
	const { name, photoUrl, text } = quotes[i];
	imgEl.src = photoUrl;
	textEl.textContent = text;
	nameEl.textContent = name;
	i++;
	if (i === quotes.length) {
		i = 0;
	}
	setTimeout(() => {
		updateQuotes();
	}, 4000);
};
updateQuotes();
