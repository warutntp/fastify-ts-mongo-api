# Fastify TypeScript MongoDB API

This project is a Fastify API server built with TypeScript, designed to manage Products and Brands with CRUD operations. It uses MongoDB as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/warutntp/fastify-ts-mongo-api.git
    cd fastify-ts-mongo-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the server in development mode:

```bash
npm run start
```

The server will run on http://localhost:3000.


## API Endpoints
Brands
GET /brands: Get all brands
GET /brands/:id: Get a brand by ID
POST /brands: Create a new brand
PUT /brands/:id: Update a brand by ID
DELETE /brands/:id: Delete a brand by ID
Products
GET /products: Get all products
GET /products/:id: Get a product by ID
POST /products: Create a new product
PUT /products/:id: Update a product by ID
DELETE /products/:id: Delete a product by ID


## Project Structure
/src
├── api
│ ├── brand
│ │ ├── controller.ts
│ │ └── routes.ts
│ └── product
│ ├── controller.ts
│ └── routes.ts
├── models
│ ├── brand.ts
│ └── product.ts
├── database.ts
├── routes.ts
└── server.ts
