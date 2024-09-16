import React from 'react';
import Login from './pages/Login';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Login className={styles.login} />
		</div>
	);
}

export default App;
