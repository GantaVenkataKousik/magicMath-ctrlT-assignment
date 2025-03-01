Welcome to the Magic Math Application! This application calculates a special sequence called "Magic Math" and exposes it via a REST API using Node.js and Express.

<img align="right" width="100%" src="https://github.com/lassiecoder/lassiecoder/assets/17312616/0e8c9521-a567-45d9-9a71-d2d7cf5c1d88">

## What is Magic Math?

Magic Math is defined as follows:
- `magic_math(0) = 0`
- `magic_math(1) = 1`
- `magic_math(N) = magic_math(N−1) + magic_math(N−2) + N`

This sequence is similar to the Fibonacci sequence but with an additional term \( N \).

## Features

- **REST API**: Expose the Magic Math calculation over a REST endpoint.
- **Simple and Fast**: Built with Node.js and Express for quick responses.
- **Scalable**: Easily extendable for more complex operations.

## Getting Started

<img align="right" width="100%" src="https://github.com/lassiecoder/lassiecoder/assets/17312616/0e8c9521-a567-45d9-9a71-d2d7cf5c1d88">

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/GantaVenkataKousik/magicMath-ctrlT-assignment
    cd ctrlT-assignment
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
<img align="right" width="100%" src="https://github.com/lassiecoder/lassiecoder/assets/17312616/0e8c9521-a567-45d9-9a71-d2d7cf5c1d88">

### Running the Application


1. **Start the server**:
     - There are two ways to run the server based on my previous experience:

    - Using Node.js directly:
      ```bash
      node server.js
      ```
    - Using npm:
      ```bash
      npm start
      ```

2. **Access the API**:
    - Based on my previous experience, I've mentioned three ways to access the API:

    - **Using a Web Browser**:
      - Open your web browser.
      - Enter the URL: `http://127.0.0.1:5000/1` in the address bar.
      - Press Enter to see the JSON response directly in the browser.

    - **Using Postman**:
      - Open Postman.
      - Create a new GET request.
      - Enter the URL: `http://127.0.0.1:5000/1`
      - Click "Send" to see the response.

    - **Using curl**:
      ```bash
      curl http://127.0.0.1:5000/1
      ```
    - You should receive a JSON response with the result of `magic_math(1)`.


### Example Usage

1. **Get the result for N=1**:
    ```bash
    curl http://127.0.0.1:5000/5
    ```
    This will return the Magic Math result for \( N = 5 \).