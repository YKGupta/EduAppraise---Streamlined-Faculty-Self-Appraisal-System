import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import UserProvider from './context/User/Provider';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</React.StrictMode>
);