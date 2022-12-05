import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // If we import a js file, we ignore the .js

// root is the div in index.html which will contain the entire react code for the UI
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // <App/> is the component that gets rendered in the root element
