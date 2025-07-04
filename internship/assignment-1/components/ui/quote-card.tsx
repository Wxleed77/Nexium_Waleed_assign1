// internship/assignment-1/components/quote-card.tsx

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "@/lib/quotes"; // Import the Quote interface

interface QuoteCardProps {
  quote: Quote;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <Card className="max-w-md mx-auto my-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold italic text-center">
          &quot;{quote.text}&quot;
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* You can add more content here if needed */}
      </CardContent>
      <CardFooter className="text-right text-sm text-gray-600">
        — {quote.author}
      </CardFooter>
    </Card>
  );
}