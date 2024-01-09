

how can clone the repository
```bash
git clone https://github.com/omar-web-dev-2/redux-row.git
```
goto file 
```bash
cd redux-row
```
```bash 
npm install
```
### induction for redux (how can setup)
Goto 
```bash 
https://redux-toolkit.js.org/tutorials/quick-start
```
1. Install Redux Toolkit and React-Redux
```bash 
npm install @reduxjs/toolkit react-redux
```



------------------------------------------------------------
### how to create a new vite application using ts.
1.
```bash 
npm create vite 
```
2. enter a project name 
3. select the formwork 
4. select the language
5. 
```bash 
npm install
```
----------------------------------------------------------------
### how can add tailwind css with postcss (vite)
1. 
```bash
npm install -D tailwindcss postcss autoprefixer
```
2. 
```bash 
npx tailwindcss init -p
``` 
3. tailwind.config.js file changes (remove all code)
```bash 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
``` 
4. index.css changes (remove all code )
```bash 
@tailwind base;
@tailwind components;
@tailwind utilities;
```
node >> don't forget restart your application

----------------------------------------------------------------
