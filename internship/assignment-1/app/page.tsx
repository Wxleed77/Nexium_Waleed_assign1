// internship/assignment-1/app/page.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { QuoteCard } from "@/components/ui/quote-card";
import { motivationalQuotes, Quote } from "@/lib/quotes";

// --- Form Schema for Validation ---
const formSchema = z.object({
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }).max(50, {
    message: "Topic must not exceed 50 characters."
  }),
});

export default function HomePage() {
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [noQuotesFound, setNoQuotesFound] = useState<boolean>(false); // New state for no quotes

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  // --- Handle Form Submission ---
  function onSubmit(values: z.infer<typeof formSchema>) {
    const searchTopic = values.topic.toLowerCase().trim(); // Clean and standardize input
    setCurrentTopic(searchTopic); // Store the submitted topic

    const filteredQuotes = motivationalQuotes.filter(quote =>
      quote.keywords && quote.keywords.some(keyword =>
        keyword.toLowerCase().includes(searchTopic) // Case-insensitive keyword matching
      )
    );

    if (filteredQuotes.length > 0) {
      const shuffled = [...filteredQuotes].sort(() => 0.5 - Math.random());
      setDisplayedQuotes(shuffled.slice(0, 3)); // Get 3 random quotes from filtered set
      setNoQuotesFound(false);
    } else {
      setDisplayedQuotes([]); // Clear previously displayed quotes
      setNoQuotesFound(true); // Set state to indicate no quotes were found
    }
  }

  return (
  //  <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"> {/* Added dark mode classes for future */}
    //  <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400 drop-shadow-lg">
      //  Inspiration Hub
      //</h1>

       <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* The enhanced H1 tag */}
      <h1 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-xl tracking-tight leading-tight text-center animate-fade-in font-playfair-display">
        Inspiration Hub
      </h1>

      {/* --- Topic Input Form --- */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-300">
                  Enter a Topic for Inspiration
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., happiness, courage, success"
                    {...field}
                    className="border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Generate Quotes
          </Button>
        </form>
      </Form>

      {/* --- Display Generated Quotes --- */}
      <section className="mt-10 w-full max-w-xl">
        {noQuotesFound && currentTopic && ( // Display message if no quotes found for a specific topic
          <div className="text-center text-red-500 dark:text-red-400 text-lg mb-6 p-4 border border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900 rounded-lg">
            No quotes found for {currentTopic}. Try a different topic!
          </div>
        )}

        {displayedQuotes.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              Inspirational Quotes on &quot;{currentTopic}&quot;
            </h2>
            <div className="space-y-6"> {/* Increased spacing */}
              {displayedQuotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote} />
              ))}
            </div>
          </>
        )}

        {displayedQuotes.length === 0 && !noQuotesFound && ( // Initial state
          <div className="mt-10 w-full max-w-xl text-center text-gray-500 dark:text-gray-400">
            <p className="text-lg">Enter a topic above to generate motivational quotes!</p>
            <p className="text-sm mt-2">Example topics: work, success, dreams, courage, wisdom.</p>
          </div>
        )}
      </section>
    </main>
  );
}