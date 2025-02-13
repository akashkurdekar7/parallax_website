# Parallax Single Page Website with React

This repository contains a responsive and interactive single-page website built using **React** and **Styled-Components**. The website features a **parallax scrolling effect**, a **responsive navbar**, and a **pricing section** with multiple subscription plans. It is optimized for both desktop and mobile views.

## Features

- **Parallax Scrolling**: A smooth scrolling effect that creates a dynamic user experience, where the background scrolls at a different speed than the foreground.
- **Responsive Navbar**: A custom navbar that changes from transparent to white background on scroll, providing a modern interactive look.
- **Pricing Section**: Displays subscription plans with features, prices, and icons. The section adapts to different screen sizes and is fully responsive.
- **Styled Components**: Modular and scoped styling using `styled-components`.
- **FontAwesome Icons**: Used for representing features in the pricing plans and other UI elements.

## Technology Stack

- **React**: JavaScript library for building user interfaces.
- **Styled-Components**: For scoped styling, which makes it easier to maintain and manage styles in components.
- **FontAwesome**: For icons in various UI elements, such as pricing plan features.
- **Vite**: A build tool that provides a fast development environment for React.
- **Framer Motion**: A library for animations and transitions used for creating the parallax effect and other animations.

## Installation

### Prerequisites

Ensure you have **Node.js** installed on your machine. If not, download it from [here](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/website.git
   ```

````

2. **Navigate to the project directory**:

   ```bash
   cd website
   ```

3. **Install dependencies**:

   Install the necessary dependencies using npm or yarn.

   ```bash
   npm install
   ```

4. **Run the development server**:

   Start the server with the following command:

   ```bash
   npm start
   ```

   The website will be accessible at `http://localhost:3000` by default.

## File Structure

```
/src
  /components
    /Navbar.js         - Navbar component with scroll behavior and logo
    /Pricing.js        - Pricing section with subscription plans
    /ParallaxSection.js- Parallax section for dynamic scrolling
  /assets
    /images            - Any images used in the website
  /styles
    /GlobalStyles.js   - Global styles and theme configuration
  App.js               - Main component that brings everything together
  index.js             - Entry point of the application
```

## How It Works

### 1. **Parallax Scrolling**:

- The website utilizes the **Framer Motion** library for smooth scroll effects. The background scrolls at a slower rate compared to the foreground, creating the parallax effect.
- The scroll behavior is controlled in the `ParallaxSection` component, which manages the animations based on the scroll position.

### 2. **Responsive Navbar**:

- The `Navbar` component is a custom-built navbar that does not rely on third-party libraries like Flowbite. It includes buttons and components that adjust as per screen size.
- The background color of the navbar transitions from transparent to white on scroll, giving it a clean and modern look.

### 3. **Pricing Section**:

- The `Pricing` component displays three subscription plans: **Base Plan**, **Business Plan**, and **Developer Plan**.
- Each plan includes a price, description, and a list of features, represented with **FontAwesome** icons.
- The section is fully responsive, adjusting the layout and elements based on the screen size (desktop, tablet, mobile).

### 4. **Styled Components**:

- All components use `styled-components` for styling, ensuring that the styles are scoped to the components and are modular. This makes it easy to maintain the code as the project grows.
- The `GlobalStyles.js` file defines global styles, such as theme colors and fonts, that can be reused across the project.

## Customization

### 1. **Navbar**:

- To modify the navbar items, update the `Navbar.js` component. You can add, remove, or modify navigation links and their behavior.
- The logo and background color can also be customized in the same component.

### 2. **Pricing Plans**:

- The `Pricing.js` component contains an array of objects representing each subscription plan. You can modify the array to add or remove plans.
- To change the icons or text in the pricing section, update the `icon`, `desc`, and `color` properties in the objects within the array.

### 3. **Parallax Section**:

- Modify the content or background images in the `ParallaxSection.js` file. You can add additional sections or change the scrolling effect speed and easing.

### 4. **Global Styles**:

- The `GlobalStyles.js` file manages global styles like the theme colors and fonts. You can customize these to match your brand or project requirements.

## Demo

You can view a live demo of the website at [Live Demo URL](#).

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork this repository, submit issues, and contribute pull requests. Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Submit a pull request.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me directly via GitHub.

---

Thank you for checking out the project! Enjoy building and customizing your website.

```

### Explanation of the Sections:

- **Overview**: Provides a general idea of the website and its core features.
- **Technology Stack**: Lists the tools and libraries used in the project.
- **Installation**: Step-by-step guide to run the project locally on your machine.
- **File Structure**: A visual breakdown of the project's folder and file structure.
- **How It Works**: Describes the functionality of the different sections in the website (parallax effect, navbar, pricing plans, and styled components).
- **Customization**: Instructions on how to modify different parts of the website, such as the navbar, pricing plans, and global styles.
- **Demo**: Placeholder for a live demo link if available.
- **License**: Specifies that the project is under the MIT license.
- **Contributing**: Explains how others can contribute to the project by forking and submitting pull requests.
- **Contact**: Provides a way for users to get in touch with you for questions or suggestions.

This README.md will provide clear guidance to users and contributors about your project.
```
````
