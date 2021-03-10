import React, {useContext} from "react";
import {Link} from "react-router-dom";
import OptionMenu from "./OptionMenu";
import {Navbar, Nav, Badge} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";
import NetContext from "../../Context/NetContext";
import {ShoppingCartContext} from "../../Context/ShoppingCartContext";
import "../../Styles/Index.css";

function Menu(props) {

	const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

	const shoppingCartItems = () => {
		return shoppingCart.reduce((sum, {quantity}) => sum + quantity, 0)
	}

	return(
		<NetContext.Consumer>
			{
				context=>
			<div>
				<Navbar className="Navbar" bg="light" variant="light">
	    			<Navbar.Brand>LOMBOK</Navbar.Brand>
	    			<Nav className="mr-auto">
	    				<OptionMenu options={{label:"Home", path:"/"}}/>
	    				{
	    					context.login &&
	    					<>
	    						<Nav.Link onClick={context.logoutUser}>Cerrar Sesión</Nav.Link>
	    					</>
	    				}
	    				{
	    					!context.login &&
	    					<>	
			    				<OptionMenu options={{label:"Registro", path:"/registro"}}/>
			    				<OptionMenu options={{label:"Login", path:"/login"}}/>
			    			</>
	    				}
	    			</Nav>
	    			<Nav>
		    			<OptionMenu options={{label:"Carrito", path:"/carrito"}}/>
		    			<AiOutlineShoppingCart className="AiOutlineShoppingCart"/>
		    			<Badge className="shoppingCartItems" variant="dark">{shoppingCartItems()}</Badge>
	    			</Nav>
	  			</Navbar>
			</div>
			}
		</NetContext.Consumer>
	)
}

export default Menu;