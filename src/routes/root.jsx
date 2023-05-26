import { Outlet } from 'react-router-dom';
import './root.css';
import NavItem from '../components/navItem';

export default function Root() {
	return (
		<>
			<div className="d-flex mt-3">
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
						<NavItem icon="icon-park-solid:buy" title="Purchases" link="app" />
						<NavItem
							icon="icon-park-solid:config"
							title="Config"
							link="register"
						/>
						<NavItem icon="ion:log-out" title="Log out" link="login" />
					</ul>
				</div>
				<div id="detail">
					<Outlet />
				</div>
			</div>
		</>
	);
}
