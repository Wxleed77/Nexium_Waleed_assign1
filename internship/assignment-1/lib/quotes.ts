// internship/assignment-1/lib/quotes.ts

export interface Quote {
  text: string;
  author: string;
  keywords?: string[];
}

export const motivationalQuotes: Quote[] = [
  // Existing quotes (keep these)
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    keywords: ["work", "passion", "success", "motivation"],
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    keywords: ["belief", "motivation", "courage", "success"],
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    keywords: ["dreams", "future", "hope", "motivation"],
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    keywords: ["persistence", "perseverance", "effort", "motivation"],
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    keywords: ["success", "failure", "courage", "resilience", "motivation"],
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    keywords: ["future", "creation", "action", "motivation", "innovation"],
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    keywords: ["value", "success", "purpose", "meaning"],
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    keywords: ["mind", "thought", "spirituality", "self-improvement"],
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    keywords: ["time", "life", "authenticity", "purpose"],
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    keywords: ["wisdom", "knowledge", "learning", "humility"],
  },
  // NEW QUOTES ADDED BELOW THIS LINE FOR HAPPINESS, SADNESS, FEAR, ETC.
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama XIV",
    keywords: ["happiness", "joy", "actions", "positive"],
  },
  {
    text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
    author: "William Saroyan",
    keywords: ["happiness", "self-sufficiency", "contentment"],
  },
  {
    text: "Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness.",
    author: "Carl Jung",
    keywords: ["happiness", "sadness", "balance", "life"],
  },
  {
    text: "It's okay to feel sad. It just means you're human.",
    author: "Unknown",
    keywords: ["sadness", "emotions", "humanity", "acceptance"],
  },
  {
    text: "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.",
    author: "William Shakespeare",
    keywords: ["fear", "doubt", "courage", "attempt"],
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    keywords: ["fear", "courage", "overcoming", "adversity"],
  },
  {
    text: "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
    keywords: ["challenges", "meaning", "life", "overcoming"],
  },
  {
    text: "The greater the obstacle, the more glory in overcoming it.",
    author: "Molière",
    keywords: ["obstacle", "glory", "overcoming", "challenge"],
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
    keywords: ["thoughts", "mindset", "change", "perspective"],
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    keywords: ["inner strength", "potential", "self-belief"],
  },
];