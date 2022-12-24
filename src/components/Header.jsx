import React,{useState,useContext} from 'react';
import AppContext from '../context/AppContext';
import MyOrder from '@containers/MyOrder.jsx';
import '../styles/Header.scss';
import Menu from '@components/Menu.jsx';
import menu from '@icons/icon_menu.svg';
import logo from '@icons/logo_destored.png';
import shopingcart from '@icons/icono_carrito.png';
const Header = () => {

	const [toggle,setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state}=useContext(AppContext);
	const handleToggle=()=>{
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu"/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">Compra</a>
					</li>
					<li>
						<a href="/">Venta</a>
					</li>
					<li>
						<a href="/">Pago</a>
					</li>
					<li>
						<a href="/">Deposito</a>
					</li>
					<li>
						<a href="/">Entrega</a>
					</li>
					<li>
						<a href="/">Mas</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-user" onClick={handleToggle}>
						destored@example.com
					</li>
					<li className="navbar-shopping-cart" 
						onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shopingcart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu />: null}
			{toggleOrders ? <MyOrder />: null}
		</nav>
	);
}

export default Header;