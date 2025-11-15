# React + Vite
# readme or baki sb root h project k but app.css root m nhi h
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# we close once project whenever we change in environment 
# environment variable file loads only once usually
# whenever we create a react app env we always use reactapp(REACT_APP) & name as_APPWRITE_URL
REACT_APP_APPWRITE_URL
# and to access that perticular file we use process.env.REACT_APP_APPWRITE_URL 
# through process.env we can access that file 

# it depends on environment we are trying to access like im creating in vite so i'll be doing like 
# Insted of REACT_APP_ || i'll use (VITE_)SOME_var
# in documentation i can see in env variable env module something 
# in order to access it ill have touse [import.meta.env.(VITE_SOME_VARIABLE)]= import.meta.env important

# redux toolkit =>

   slice.actions =>
   # slice is the name of the mthod 
   # actions comes from the methods used in reducers 

   # in app.jsx return means conditional rendering 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
