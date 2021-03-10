import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import "../Styles/Products.css";

function Products(props) {
	return (
  		<div className="products-container">
			<Card className="text-center">
  				<Card.Body>
  					<Card.Img className="products-image" variant="top" src={props.productos.data().image}/>
		    		<Card.Title className="products-title">{props.productos.data().name}</Card.Title>
		    		<Card.Text className="precio">${props.productos.data().price}</Card.Text>
					<Link to={"/productos/"+props.productos.id}><Button variant="dark">Ver Detalle</Button></Link>
  				</Card.Body>
			</Card>
		</div>
  	);
}

export default Products;
