# React CI/CD Demo

This project demonstrates a working CI/CD pipeline for a React application using GitHub Actions and Firebase Hosting.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

## CI/CD Pipeline

The CI/CD pipeline is configured with GitHub Actions. On every push to the `main` branch, the pipeline:

1. Sets up a Node.js environment
2. Installs dependencies
3. Runs tests (if any)
4. Builds the project
5. Deploys the application to Firebase Hosting

## Deployment

The application is deployed to Firebase Hosting. You can view the deployed application at `<your-firebase-app-url>`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)