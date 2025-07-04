// internship/assignment-1/lib/quotes.ts

export interface Quote {
  text: string;
  author: string;
  keywords?: string[]; // Add an optional keywords array
}

export const motivationalQuotes: Quote[] = [
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
];