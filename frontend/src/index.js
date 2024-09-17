import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import UserProvider from './context/User/Provider';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Main from './layouts/Main';
import SearchProvider from './context/Search/Provider';
import LandingPage from './pages/LandingPage/LandingPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		children: [
			{
				path: "login",
				element: <Login />
			},
			{
				path: "*",
				element: <Main />,
				children: [
					{
						path: "home",
						element: <Home />
					},
					{
						path: "facultyManagement",
						element: <LandingPage />
					}
				]
			}
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<UserProvider>
				<SearchProvider>
					<RouterProvider router={router} />
				</SearchProvider>
		</UserProvider>
	</React.StrictMode>
);