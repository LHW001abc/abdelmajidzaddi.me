# Abdelmajid ZADDI - Portfolio Website
[![Live Preview](https://img.shields.io/badge/Live-Preview-blue)](https://abdelmajidzaddi.me)

Welcome to my personal portfolio repository! This project showcases my skills, services, and projects as a software engineer and system integrator. It's built using modern web technologies and highlights some of the most exciting work I've done, along with the services I offer.

## 🌟 Features
- **Services Section**: A detailed description of the services I offer as a software engineer, each with an icon, excerpt, overview, and features.
- **Request a Service**: Make a request for a service directly from the portfolio.
- **Projects Showcase**: Displays selected personal and professional projects with descriptions, technologies used, and links to repositories or live demos.
- **Light/Dark Theme**: A toggle switch that allows visitors to switch between light and dark themes.
- **Responsive Design**: Fully responsive design ensuring an optimal viewing experience across various devices.
- **Contact Form**: A functional contact form for users to get in touch, with email notifications.
- **Animations**: Smooth animations and transitions to enhance the user experience.
- **SEO Optimized**: The portfolio is optimized for search engines to ensure that it ranks well in search results.

## 🛠️ Tech Stack
- **Frontend**: Built using Next.js, a React framework for server-side rendering.
- **Styling**: Styled using Tailwind CSS, a utility-first CSS framework.
- **Deployment**: Hosted on Vercel, a cloud platform for static sites and serverless functions, with continuous integration and continuous deployment via GitHub Actions.
- **Email Handling**: Contact form submissions are handled using Nodemailer, a module for Node.js applications to allow email sending.

## 🚀 Integration and Deployment
This portfolio is integrated with Vercel for deployment. Vercel is a cloud platform for static sites and serverless functions that provides a seamless integration with Next.js.

This repository is configured with GitHub Actions to automatically deploy the portfolio to Vercel whenever changes are pushed to the `master` branch.

## 🚀 Getting Started
Follow the instructions below to set up and run this portfolio project locally.

### Prerequisites
Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ismailza/ismailzahir.com.git
    ```
   
2. Navigate into the project directory:
    ```bash
    cd ismailzahir.com
    ```
   
3. Install the dependencies:
    ```bash
    npm install
    ``` 
   or
    ```bash
    yarn install
    ```
   
4. Create a `.env` file in the root of the project and add the following environment variables:
    ```bash
   cp .env.example .env
    ```

### Running the Portfolio
To run the project locally:
```bash
  npm run dev
```
Or with Yarn:
```bash
  yarn dev
```
This will start a local development server, and you can view the portfolio in your browser at [http://localhost:3000](http://localhost:3000).

### Building the Portfolio

To build the project for production:
```bash
  npm run build
```
Or with Yarn:
```bash
  yarn build
```

This will generate a production build of the portfolio in the `.next` folder.

### Running the Production Build
To run the production build locally:
```bash
  npm start
```

## 🌐 Live Demo
The portfolio is live at [ismailzahir.com](https://ismailzahir.com).

## 📧 Contact
Feel free to reach out if you'd like to collaborate or have any inquiries:

- **Email**: [ismailza407@gmail.com](mailto:ismailza407@gmail.com)
- **LinkedIn**: [Ismail ZAHIR](https://www.linkedin.com/in/ismailzahir01/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
If you'd like to contribute or suggest improvements, feel free to open a pull request or issue.
