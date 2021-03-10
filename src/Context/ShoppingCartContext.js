import React, {useState, useEffect, useContext} from "react";

export const ShoppingCartContext = React.createContext();

const ShoppingCartFromLocalStorage = JSON.parse(localStorage.getItem("shoppingCart") || "[]")

export const ShoppingCartProvider = (props) => {

	const [shoppingCart, setShoppingCart] = useState(ShoppingCartFromLocalStorage);

	useEffect(() => {
		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
	}, [shoppingCart]);

	return (
		<ShoppingCartContext.Provider value={[shoppingCart, setShoppingCart]}>
			{props.children}
		</ShoppingCartContext.Provider>
	)
}