
# ElcryptIQ - Conveys Intelligence and insight into encryption

**ElcryptIQ** is an interactive web application designed to help users learn about and compare cryptographic algorithms, specifically AES and RSA. Users can explore each algorithm’s characteristics, performance metrics, and security features.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

ElcryptIQ provides users with an educational platform for learning and understanding cryptographic algorithms. The project focuses on two primary encryption methods: **AES (Advanced Encryption Standard)** and **RSA (Rivest-Shamir-Adleman)**, providing insights into their performance, security features, and real-time encryption/decryption demonstrations.

## Features

- **Algorithm Comparison**: Explore AES and RSA encryption, including their strengths, weaknesses, and usage scenarios.
- **Interactive Interface**: A user-friendly UI that includes metrics and examples for each algorithm.
- **Educational Content**: Information on cryptographic principles, making it easy to understand how AES and RSA work.
- **Responsive Design**: Optimized for various devices.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Icons**: react-icons

## Getting Started

Follow these instructions to set up and run ElcryptIQ on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Anaskaysar/EncryptIQ-Conveys-Intelligence-And-Insight-Into-Encryption
   ```

2. **Navigate into the Project Directory**

   ```bash
   cd ElcryptIQ
   ```

3. **Install Dependencies**

   Run the following command to install all project dependencies:

   ```bash
   npm install
   ```

### Running the Project

After installing dependencies, you can run the project locally using:

```bash
npm run dev
```

This will start the development server, and you can access the project at `http://localhost:5173` or `http://localhost:3000` by default.

## Folder Structure

Here's an overview of the project folder structure:

```
ElcryptIQ
├── public                  # Static files
│   ├── index.html          # Main HTML file
│   └── images/             # Folder for team images and assets
├── src                     # Source files
│   ├── assets/             # Assets like images, icons
│   ├── components/         # Reusable components
│   │   ├── Header.jsx      # Header component
│   │   ├── Footer.jsx      # Footer component
│   │   ├── ContentCard.jsx # Content card component
│   │   └── TeamMemberCard.jsx # Team member card component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── LearnMore.jsx   # Learn More page
│   │   ├── Aes.jsx         # AES details page
│   │   └── Rsa.jsx         # RSA details page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Main CSS file (includes Tailwind setup)
├── teamMembers.json        # JSON file with team member data
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```
