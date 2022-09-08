# Website Smart Dashboard

Smart Dashboard is a web application that allows you to check water consumption and other data from IoT device that installed in water meter. It is built with [Go](https://go.dev/) and Using [Fiber](https://gofiber.io/) Framework for Backend Services. The Frontend is built with [React](https://reactjs.org/) and The Mobile App is built with [Flutter](https://flutter.dev/).

## Architecture

Smart Dashboard is built with Microservices Architecture. It has 3 main services, which are:

- [Smart Dashboard Backend](https://github.com/Smart-Dashboard-ESD/BE_Smart_Dashboard)
- [Smart Dashboard Frontend](https://github.com/Smart-Dashboard-ESD/Website_Smart_Dashboard)
- [Smart Dashboard Mobile App](https://github.com/Smart-Dashboard-ESD/Mobile_Smart_Dashboard)

## About Frontend

The Smart Dashboard Frontend is the result of translating the design from the UI/UX Designer and shows the data fetched from the Smart Dashboard Backend API. This dashboard is built with the JavaScript Framework namely [ReactJS](https://reactjs.org/docs/getting-started.html) and the CSS Framework namely [TailwindCSS](https://tailwindcss.com/docs/installation).

## Repository Structure

The repository is structured as follows:

- `main` is main branch of the repository and contains the latest stable version of the code.
- `dev` is the development branch of the repository and contains the latest development version of the code.
- `feature/feature_name` branches are used to develop new features and are merged into `dev` when they are ready.
- commits formatted as `feat/feature_name` are used to fix bugs in the code and are merged into `dev` when they are ready.

## Installation

### Prerequisites

- ReactJS 18.2.0
- NodeJS LTS

### Running the application

```bash
npm i && npm start
```
