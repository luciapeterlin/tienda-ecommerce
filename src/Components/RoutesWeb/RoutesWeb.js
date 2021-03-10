import {Route} from "react-router-dom";
import Home from "../../Pages/Home";
import ProductDetails from "../../Pages/ProductDetails";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import ShoppingCart from "../../Pages/ShoppingCart";

function RoutesWeb() {
	return(
		<>
			<Route path="/" exact component={Home}/>
			<Route path="/productos/:id" exact component={ProductDetails}/>
			<Route path="/registro" exact component={Register}/>
			<Route path="/login" exact component={Login}/>
			<Route path="/carrito" exact component={ShoppingCart}/>
		</>
	);
}

export default RoutesWeb;