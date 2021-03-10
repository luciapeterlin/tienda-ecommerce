import React , {useState, useEffect} from "react";
import Products from "../Components/Products";
import {Container} from "react-bootstrap";
import firebase from "../Config/firebase";
import "../Styles/Home.css";

function Home() {
	
	const [productos, setProductos] = useState([]);

	useEffect(()=>{
      firebase.db.collection("productos")
	    .get()
	    .then(querySnapshot=>{
	        setProductos(querySnapshot.docs);
		})
  	}, []);

	return(
		<Container>
			<div className="home-container">
				{productos.map(producto=><Products key={producto.name} productos={producto}/>)}
			</div>
		</Container>
	)
}

export default Home;