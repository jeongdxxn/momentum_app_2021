const quotes = [
    {
        quote: '"The way to get started is to quit talkin and begin doing"',
        author: "Walt Disney"
    },
    {
        quote: '"The only person you are destined to become is the person you decide to be"',
        author: "Ralph Waldo Emerson"
    },
    {
        quote: '"You never regret being kind."',
        author: "Nicole Shepherd"
    },
    {
        quote: '"The only thing that will make you happy is being happy with who you are, and not who people think you are."',
        author: "Goldie Hawn "
    },
    {
        quote: '"You are what you repeatedly do. Excellence is not an event it is a habit."',
        author: "Aristoteles"
    },
    {
        quote: '"Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times."',
        author: "Napoleon Hill"
    },
    {
        quote: '"Always do what you are afraid to do"',
        author: "Ralph Waldo Emerson"
    },
    {
        quote: '"When you have faults, do not fear to abandon them."',
        author: "Confucius"
    },
    {
        quote: `"If i gad eight hours to chop down a tree, I'd spend six hours sharpening my ax"`,
        author: "Abraham Lincoln"
    },
    {
        quote: '"The more we do, the more we can do"',
        author: "William Hazlitt"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

// Math.random 함수는 0 이상 1 미만의 구간의 숫자를 랜덤으로 반환
// Math.round 함수는 소수 첫번째 자리 숫자를 올림해서 반환
// Math.floor 함수는 소수 첫번째 자리 숫자를 내림해서 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
