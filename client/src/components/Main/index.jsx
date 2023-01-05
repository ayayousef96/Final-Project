import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Main = () => {
	

	
	return (

		<div >
			<NavBar />
			<center>
				<br></br>
			<div className={styles.login_container}>
			<div className={styles.login_form_container}>
			<div className={styles.right}>
					<img className={styles.img} src="./images/aya.jpg" alt="login" />
			</div>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h3>Welcome to</h3>
						<h1>Math With Aya</h1>
						<h5>This free website was created by mathematics teacher Aya Yousef
							<h5>High school students can study math togther here and private math teachers can teach math here too.</h5>
							<br></br><br></br><br></br><br></br><br>
							</br>
							<h2>Contact for private lesson with Aya</h2>
							<br></br>
							<h3>phone : 0505833586</h3>
							<h3>mail : ayayou1205@gmail.com </h3> 
							</h5>
						
						
					
					</form>
				</div>
				
			</div>
		</div>
		</center>
			
		</div>
		
	);
};

export default Main;