import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Home</h1>
				<Link to="/calculator">
					<button className={styles.white_btn} >
						Calculator
					</button>
				</Link>
				<Link to="/solver">
					<button className={styles.white_btn} >
						Polynom Solver
					</button>
				</Link>
				<Link to="/plot">
					<button className={styles.white_btn} >
						Plot
					</button>
				</Link>
				<Link to="/board">
					<button className={styles.white_btn} >
						Board
					</button>
				</Link>
				{/* <Link to="/class">
					<button className={styles.white_btn} >
						join Class
					</button>
				</Link> */}
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;