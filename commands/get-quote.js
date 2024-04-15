import chalk from "chalk";

export function getQuote() {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      quote:
        "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote:
        "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      quote:
        "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      quote: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford",
    },
    {
      quote:
        "People who are crazy enough to think they can change the world, are the ones who do.",
      author: "Rob Siltanen",
    },
    {
      quote: "Do what you can with all you have, wherever you are.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen R. Covey",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "What you do speaks so loudly that I cannot hear what you say.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: "Robert Louis Stevenson",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  console.log(
    chalk.yellowBright(`${randomQuote.quote} - ${randomQuote.author}`)
  );
}
