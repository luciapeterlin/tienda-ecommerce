import React,{useState,useEffect, useContext} from "react";
import {Button, Card} from "react-bootstrap";
import firebase from "../Config/firebase";
import {ShoppingCartContext} from "../Context/ShoppingCartContext";
import "../Styles/ProductDetails.css";

function ProductDetails(props){
    
    const [producto,setProducto] = useState({});
    const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

    useEffect(()=>{
        firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                setProducto(doc.data())
            })
    }, []
    )

    const addToCart=(producto)=>{
        let newCart = [...shoppingCart];
        let itemInCart = newCart.find((item) => producto.name === item.name);
        if(itemInCart){
            itemInCart.quantity++;
        } else{
            itemInCart = {...producto, quantity:1};
            newCart.push(itemInCart)
        }
        setShoppingCart(newCart);
    };

    return(
        <Card className="Card">
            <div className="details-container">
                <div className="photo-container">
                    <img className="product-image" src={producto.image}/>
                </div>
                <div className="product-details">            
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>SKU {producto.sku}</Card.Text>
                    <Card.Text>${producto.price}</Card.Text>
                    <Button variant="dark" onClick={()=>addToCart(producto)}>Agregar a Carrito</Button>
                </div>

            </div>
        </Card>
    )  
}

export default ProductDetails;