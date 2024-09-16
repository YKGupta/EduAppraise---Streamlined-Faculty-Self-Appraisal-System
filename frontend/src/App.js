import React from 'react';
import styles from './App.module.scss';
import UnderConstruction from './components/footer/Under Construction';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className={styles.app}>
			<ToastContainer pauseOnHover={false} theme='dark' progressStyle={{backgroundColor: '#918B6C'}} />
			<Outlet />
			<UnderConstruction />
		</div>
	);
}

export default App;
