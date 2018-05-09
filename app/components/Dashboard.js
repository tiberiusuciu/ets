import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

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
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>
									<StarRatingComponent
					          name=""
					          editing={false}
					          starCount={5}
					          value={3}
					        />
								</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>
						<div className={styles.userListInnerSeparation}></div>
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>Ratings</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>
						<div className={styles.userListInnerSeparation}></div>
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>Ratings</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>
						<div className={styles.userListInnerSeparation}></div>
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>Ratings</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>
						<div className={styles.userListInnerSeparation}></div>
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>Ratings</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>
						<div className={styles.userListInnerSeparation}></div>
						<div className={styles.tutorList}>
							<div className={styles.userListFirstRow}>
								<div className={styles.inlineUserStats}>Nom: Tiberiu Cristian Suciu</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>Ratings</div>
							</div>
							<div className={styles.userListInnerInfoSpacing}>
								<div className={styles.inlineUserStats}>Niveau: Baccalauréat</div>
								<div className={styles.inlineUserStats + " " + styles.userListRightAlign}>51 <i className="fas fa-user"></i></div>
							</div>
						</div>

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
