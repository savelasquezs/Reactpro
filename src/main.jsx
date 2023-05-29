import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Login from './views/Login';
import ErrorPage from './error-page';
import Register from './views/Register';
import Miguel from './views/Miguel';
import Orders from './views/Orders';
import { Purchases } from './views/Purchases/index.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/miguel', element: <Miguel />, errorElement: <ErrorPage /> },
			{ path: '/orders', element: <Orders />, errorElement: <ErrorPage /> },
			{
				path: '/purchases',
				element: <Purchases />,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/app',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
