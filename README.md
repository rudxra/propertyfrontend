# Totality-Frontend-Challenge

## Overview
This project is built using **Next.js** as the frontend framework, **Sanity** as the backend CMS, and **Cashfree** as the payment gateway API. The goal of this project is to create a seamless and scalable web application with a powerful CMS and secure payment processing.

## Features
- **Next.js**: Fast, server-rendered React applications.
- **Sanity CMS**: A headless CMS for managing content with ease.
- **Cashfree API**: Secure and reliable payment processing.

## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Sanity.io](https://www.sanity.io/)
- **Payment Gateway**: [Cashfree](https://www.cashfree.com/)

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/rudxra/totality-frontend-challenge/
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory and add the following:

    ```plaintext
    NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
    NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
    CASHFREE_API_KEY=your-cashfree-api-key
    CASHFREE_SECRET_KEY=your-cashfree-secret-key
    ```

4. **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
    Open [http://localhost:3333](http://localhost:3000) for the sanity backend

## Usage

- **Content Management**: Use the Sanity Studio to manage content.
- **Payments**: Cashfree API is integrated for processing payments.

## Project Structure

