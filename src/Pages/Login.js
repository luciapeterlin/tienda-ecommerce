import React,{useState, useContext} from "react";
import {Card, Form,Button,Spinner} from "react-bootstrap";
import AlertCustom from "../Components/AlertCustom";
import firebase from "../Config/firebase";
import NetContext from "../Context/NetContext";

function Login(){
    const context = useContext(NetContext);
    const [form, setForm] = useState({email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})

    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario logueado",data)
            setSpinner(false);
            setAlert({variant:"success",text:"¡Bienvenido/a!"});
            context.loginUser();
        })
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
            setAlert({variant:"danger",text:"Ocurrió un error. Inténtelo nuevamente."})
        })
        
    }

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;
        
        setForm({
          ...form,
          [name] : value});
    }

    return(
        <Card style={{ width: '25em', margin:'auto', top:'50px'}}>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar email" name="email" value={form.email} onChange={handleChange} />  
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar Password" name="password" value={form.password} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        {
                            spinner && 
                            <Spinner animation="border" variant="light" size="sm" />
                        }
                        Ingresar
                    </Button>
                </Form>
                <AlertCustom variant={alert.variant} text={alert.text} />                  
            </Card.Body>
        </Card>
    )  
}

export default Login;