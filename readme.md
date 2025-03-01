Welcome to the Magic Math Application! This application calculates a special sequence called "Magic Math" and exposes it via a REST API using Node.js and Express.

<img src="https://github.com/lassiecoder/lassiecoder/assets/17312616/2ae4d51a-1aae-45b9-86ae-75d01eb6e446" align="right" width="35%" alt="Image">

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

 <img src="https://github.com/lassiecoder/lassiecoder/assets/17312616/2ae4d51a-1aae-45b9-86ae-75d01eb6e446" align="right" width="35%" alt="Image">

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/GantaVenkataKousik/ctrlT-assignment.git
    cd ctrlT-assignment
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
<img src="https://github.com/lassiecoder/lassiecoder/assets/17312616/2ae4d51a-1aae-45b9-86ae-75d01eb6e446" align="right" width="35%" alt="Image">

### Running the Application

1. **Start the server**:
     
    - Using Node.js directly:
      ```bash
      node server.js
      ```


2. **Access the API**:

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