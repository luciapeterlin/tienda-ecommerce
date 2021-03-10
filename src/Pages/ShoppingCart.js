import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import {ShoppingCartContext} from "../Context/ShoppingCartContext";
import AlertCustom from "../Components/AlertCustom";
import {BsTrash} from "react-icons/bs";
import "../Styles/ShoppingCart.css";

function ShoppingCart(props){

	const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
	const [alert,setAlert] = useState({variant:"",text:""})

    const removeItem = (productToRemove) => {
      setShoppingCart(shoppingCart.filter((producto) => producto !== productToRemove)
      	);
  	};

	const totalPrice = () =>{
		return shoppingCart.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
	};

  	const Finalizar = (event) => {
      setAlert({variant:"success",text:"¡Gracias por su compra!"});
 	};

    const clearCart = (event) => {
      setShoppingCart([]);
  	};

	const setQuantity = (producto, amount) => {
	    const newCart = [...shoppingCart];
	    newCart.find((item) => item.name === producto.name).quantity = amount;
	    setShoppingCart(newCart);
  	};


   	return(        
		<div className="shoppingcart-container">
            <h3>Carrito de Compras</h3>
            
            {shoppingCart.length === 0 ? 
				(<h5>El carrito de compras se encuentra vacío</h5>) 
            		:
		        (<div className="shopping-details">
					<h6>Precio total: ${totalPrice()}</h6>
					<div className="buttons-container">
						<Button variant="dark" onClick={()=>Finalizar()}>Finalizar compra</Button>
						<Button className="button" variant="light" onClick={()=>clearCart()}>Vaciar carrito</Button>

						<AlertCustom variant={alert.variant} text={alert.text} />
					</div>
					<Link to={"/"}><h6>Volver a la tienda</h6></Link>
				</div>
				)}
	        	
            {shoppingCart.map((producto) => (
				<Card className="shoppingcart-card">
					<div className="product-container">
	                	<div className="product-image-container">
		                    <img
		                    	className="image-container"
		                		src={producto.image}
		                		alt={producto.name}
		              		/>
	                	</div>

		                <div className="details">            
		                    <h5>{producto.name}</h5>
							<p>Subtotal: {producto.quantity} x ${producto.price} = ${producto.price * producto.quantity }</p>
		                	<p>Cantidad:</p>
			                <input
			                type= "number"
			                  value={producto.quantity}
			                  onChange={(e) =>
			                    setQuantity(
			                      producto,
			                      parseInt(e.target.value)
			                    )
			                  }
			                />
							<button style={{background:"white", border:"none", padding:"15px", fontSize:"20px"}} onClick={()=>removeItem(producto)}><BsTrash/></button>
		                </div>
	            	</div>
	            </Card>
	       	))}
		</div>
	)
}

export default ShoppingCart;