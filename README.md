# Nexium Waleed Assignment 1: Inspirational Quote Generator

This repository contains the solution for "Assignment 1: Quote Generator Web App" as part of the Nexium Internship Program.

The application allows users to generate motivational quotes based on a provided topic, aiming to offer quick bursts of inspiration.

## Features

* **Topic-Based Quote Generation**: Users can input a topic (e.g., "happiness", "courage", "success") to receive relevant motivational quotes.
* **Dynamic Quote Display**: Displays 3 motivational quotes that are filtered based on the entered topic. If no matching quotes are found, a "No quotes found" message is displayed.
* **Local Data Source**: Quotes are fetched from a local JSON/array, demonstrating client-side data handling.
* **Responsive UI**: Built with modern web technologies, ensuring a clean and responsive user interface across different devices.
* **Aesthetically Pleasing Design**: Incorporates custom fonts, gradient text, and enhanced styling for a visually appealing experience.

## Tech Stack

* **Next.js**: A React framework for building server-rendered and static web applications.
* **React**: A JavaScript library for building user interfaces.
* **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer experience.
* **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
* **ShadCN UI**: A collection of re-usable components built using Radix UI and Tailwind CSS, used for the form and card elements.
* **react-hook-form**: For efficient and flexible form management.
* **Zod**: For powerful schema validation (used with react-hook-form).
* **Vercel**: The platform used for seamless deployment and continuous integration.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js**: LTS version (includes npm)
* **Git**: For version control

### Installation and Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Wxleed77/Nexium_Waleed_assign1.git](https://github.com/Wxleed77/Nexium_Waleed_assign1.git)
    ```
2.  **Navigate into the repository root:**
    ```bash
    cd Nexium_Waleed_assign1
    ```
3.  **Navigate into the project directory:**
    The actual Next.js application code resides in `internship/assignment-1/`.
    ```bash
    cd internship/assignment-1
    ```
4.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application is deployed on Vercel and features continuous deployment from the `main` branch of this GitHub repository.

**Live Demo:** [Your Vercel Deployment URL Here] (e.g., `https://nexium-waleed-assign1-5rfl.vercel.app`)

---