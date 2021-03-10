import React,{useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./Components/Menu/Index";
import RoutesWeb from "./Components/RoutesWeb/RoutesWeb";
import GlobalState from "./Context/GlobalState";
import {ShoppingCartProvider} from "./Context/ShoppingCartContext";

function App() {

	const [options,setOptions] = useState([
		{
			path:"/",
			label:"Home"
		}
		,
		{
			path:"/registro",
			label:"Registro"
		},
		{
			path:"/login",
			label:"Login"
		},
				{
			path:"/carrito",
			label:"Carrito"
		}
	])

	return (
		<GlobalState>
			<ShoppingCartProvider>
				<BrowserRouter>
					<Menu data={options}/>
					<RoutesWeb/>
				</BrowserRouter>
			</ShoppingCartProvider>
		</GlobalState>
	);
}

export default App;