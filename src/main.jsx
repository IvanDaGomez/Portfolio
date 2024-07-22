import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Home/App.jsx';
import Bio from './routes/Bio/Bio.jsx';
import Projects from './routes/Projects/projects.jsx';
import HireMe from './routes/Hire/hireme.jsx';
import './index.css';
import ErrorPage from './components/errorPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Experience from './routes/experience/exp.jsx';




// Pendiente usar useAnimation y que se agreguen automaticamente los estilos necesarios para que funcione
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/bio",
    element: <Bio />,
    
  },
  {
    path: "/projects",
    element: <Projects />,
    
  },
  {
    path: "/hire",
    element: <HireMe />,
    
  },
  {
    path: "/exp",
    element: <Experience />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
