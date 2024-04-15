import chalk from "chalk";

export function getQuote() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      text: "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      author: "Thomas Edison",
    },
    {
      text: "I find that the harder I work, the more luck I seem to have.",
      author: "Thomas Jefferson",
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
    },
    {
      text: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      text: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      text: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford",
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas Edison",
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
      author: "Terry Pratchett",
    },
    {
      text: "Do not take life too seriously. You will never get out of it alive.",
      author: "Elbert Hubbard",
    },
    {
      text: "The difference between genius and stupidity is: genius has its limits.",
      author: "Albert Einstein",
    },
    {
      text: "The man who smiles when things go wrong has thought of someone to blame it on.",
      author: "Robert Bloch",
    },
    {
      text: "The only mystery in life is why the kamikaze pilots wore helmets.",
      author: "Al McGuire",
    },
    {
      text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
      author: "Oscar Wilde",
    },
    {
      text: "I'm an idealist. I don't know where I'm going, but I'm on my way.",
      author: "Carl Sandburg",
    },
    {
      text: "The road to success is dotted with many tempting parking spaces.",
      author: "Will Rogers",
    },
    {
      text: "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.",
      author: "Marie von Ebner-Eschenbach",
    },
    {
      text: "People who think they know everything are a great annoyance to those of us who do.",
      author: "Isaac Asimov",
    },
    {
      text: "The elevator to success is out of order. You'll have to use the stairs... one step at a time.",
      author: "Joe Girard",
    },
    {
      text: "Behind every successful man is a woman, behind her is his wife.",
      author: "Groucho Marx",
    },
    { text: "I never said most of the things I said.", author: "Yogi Berra" },
    {
      text: "I am free of all prejudices. I hate everyone equally.",
      author: "W.C. Fields",
    },
    {
      text: "I intend to live forever. So far, so good.",
      author: "Steven Wright",
    },
    {
      text: "Clothes make the man. Naked people have little or no influence on society.",
      author: "Mark Twain",
    },
    {
      text: "I'm not afraid of death; I just don't want to be there when it happens.",
      author: "Woody Allen",
    },
    {
      text: "I can resist everything except temptation.",
      author: "Oscar Wilde",
    },
  ];

  const randomQuote = quotes[Math.round(Math.random() * quotes.length)];

  console.log(
    chalk.yellowBright(`${randomQuote.text} - ${randomQuote.author}`)
  );
}
