import React, { Component } from 'react';

import styles from '../styles/MainPage.css';

class MenuSelection extends Component {
	render() {
		return (
			<div className={"row justify-content-center " + styles.DashBoard}>
				<div className={styles.dashboardListContainer}>
					<div className={styles.dashboardTab}>
						<div className={styles.tabOption}><i className="far fa-star"></i></div>
						<div className={styles.tabOption}><i className="fas fa-user"></i></div>
						<div className={styles.tabOption}><i className="fas fa-sort-alpha-up"></i></div>
						<div className={styles.tabOption + " " + styles.tabOptionEnd}><i className="fas fa-graduation-cap"></i></div>
					</div>
					<div className={styles.dashboardList}>
						list
					</div>
				</div>
				<div className={styles.dashboardProfile}>
						profile
				</div>
			</div>
		)
	}
};

export default MenuSelection;
