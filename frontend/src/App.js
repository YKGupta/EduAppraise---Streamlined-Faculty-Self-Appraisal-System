import React from 'react';
import Login from './pages/Login';
import styles from './App.module.scss';
import UnderConstruction from './components/footer/Under Construction';

function App() {
	return (
		<div className={styles.app}>
			<Login className={styles.login} />
			<UnderConstruction />
		</div>
	);
}

export default App;
