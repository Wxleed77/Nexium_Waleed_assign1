// internship/assignment-1/app/page.tsx

"use client"; // This is crucial for using React hooks in an App Router component

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod"; // For validation
import { zodResolver } from "@hookform/resolvers/zod"; // To integrate zod with react-hook-form

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 //import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { QuoteCard } from "@/components/ui/quote-card";
import { motivationalQuotes, Quote } from "@/lib/quotes"; // Import your quotes and interface

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
  const [topic, setTopic] = useState<string>("");

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  // --- Handle Form Submission ---
  function onSubmit(values: z.infer<typeof formSchema>) {
    setTopic(values.topic); // Store the submitted topic
    // Filter quotes based on topic (basic example, can be improved)
    // For this assignment, we'll just display a random set as it's local data
    const shuffled = [...motivationalQuotes].sort(() => 0.5 - Math.random());
    setDisplayedQuotes(shuffled.slice(0, 3)); // Get 3 random quotes
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">
        Quote Generator
      </h1>

      {/* --- Topic Input Form --- */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Enter a Topic e.g Success, Motivation </FormLabel>
                <FormControl>
                  <Input placeholder="e.g., happiness, courage" {...field} className="border border-gray-300 focus:border-blue-500"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate Quotes
          </Button>
        </form>
      </Form>

      {/* --- Display Generated Quotes --- */}
      {displayedQuotes.length > 0 && (
        <section className="mt-10 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Quotes for &quot;{topic || 'Your Topic'}&quot;
          </h2>
          <div className="space-y-4">
            {displayedQuotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </div>
        </section>
      )}

      {/* Display initial quotes if no topic entered yet (optional) */}
      {displayedQuotes.length === 0 && topic === "" && (
        <section className="mt-10 w-full max-w-xl text-center text-gray-500">
          <p>Enter a topic above to generate motivational quotes!</p>
        </section>
      )}
    </main>
  );
}