import React from "react";
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function OptionMenu(props){

    const {options} = props;

	return(
		<Nav.Link as={Link} to={options.path}>{options.label}</Nav.Link>
	)
}

export default OptionMenu;