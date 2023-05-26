import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import './index.css';

function NavItem({ icon, title, link }) {
	return (
		<>
			<li className=" text-center">
				<NavLink
					to={link}
					className={({ isActive, isPending }) => {
						return isActive ? 'active' : isPending ? 'pending' : '';
					}}
				>
					<div>
						<Icon icon={icon} color="#262c3f" width="30" />
					</div>
					<h5>{title}</h5>
				</NavLink>
			</li>
		</>
	);
}

export default NavItem;
