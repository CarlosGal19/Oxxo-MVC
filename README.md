# Express API

This repository contains an Express API application. Follow the steps below to clone and set up the project on your local machine.

## Requirements

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

## Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/CarlosGal19/Oxxo-MVC
    ```

2. **Navigate to the project directory**

    ```sh
    cd Oxxo-MVC
    ```

3. **Install dependencies**

    Using npm:

    ```sh
    npm install
    ```

    Using yarn:

    ```sh
    yarn install
    ```

## Usage

1. **Create a `.env` file**

    Create a `.env` file in the root directory of the project and add your environment variables. Example:

    ```env
    PORT=5000
    MONGO_URI='MONGODB URI'
    ```

2. **Run the server**

    Using npm:

    ```sh
    npm start
    ```

    Using yarn:

    ```sh
    yarn start
    ```

    The server will start on the port specified in your `.env` file. If no port is specified, it will default to `5000`.
