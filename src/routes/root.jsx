import { Outlet, redirect } from 'react-router-dom';
import './root.css';
import NavItem from '../components/navItem';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function Root() {
	const salir = () => {
		signOut(auth);
		redirect('/');
	};

	return (
		<>
			<div className="d-flex mt-3 ">
				<div id="sidebar">
					<div className="logo">
						<img src="src\assets\img\inv_transp.png" alt="" />
					</div>

					<ul>
						<NavItem
							icon="material-symbols:order-approve"
							title="Orders"
							link="orders"
						/>
						<NavItem
							icon="file-icons:dashboard"
							title="Dashboard"
							link="miguel"
						/>
						<NavItem
							icon="icon-park-solid:buy"
							title="Purchases"
							link="purchases"
						/>
						<NavItem
							icon="icon-park-solid:config"
							title="Config"
							link="register"
						/>
						<NavItem
							icon="ion:log-out"
							title="Log out"
							link="login"
							onClick="salir"
						/>
					</ul>
				</div>
				<div id="details" className="flex-fill">
					<Outlet />
				</div>
			</div>
		</>
	);
}
