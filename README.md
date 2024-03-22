# ReactThreeFloatingSpheresBackground

<img src="public/demo.gif" alt="Demo" width="50%">

This project is a template that provides a minimal setup to get React working in Vite with HMR and some ESLint rules. It also includes a floating spheres background created with React Three Fiber.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/ReactThreeFloatingSpheresBackground.git
```

2. Navigate to the project directory:

```bash
cd ReactThreeFloatingSpheresBackground
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

This will start the development server and open the application in your default browser. Any changes you make to the code will automatically trigger a hot module replacement (HMR) and update the application in real-time.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run serve`: Serves the production build locally.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. Follow these steps:

1. Configure the top-level `parserOptions` property in the `.eslintrc.js` file like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

2. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

## Additional Resources

For more information about Vite, React, TypeScript, and React Three Fiber, refer to the following resources:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- [Babel](https://babeljs.io/)
- [SWC](https://swc.rs/)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

Happy coding!
