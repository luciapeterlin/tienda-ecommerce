import React,{useState} from "react";
import {Card,Form,Button,Spinner} from "react-bootstrap";
import AlertCustom from "../Components/AlertCustom";
import firebase from "../Config/firebase";

function Register()  {
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false)
    const [alert,setAlert] = useState({variant:"",text:""})

    const handleSubmit = (e)=>{
        e.preventDefault();
        setSpinner(true);
        let email=form.email;
        let password=form.password;
        firebase.auth.createUserWithEmailAndPassword(email, password)
            .then((data)=>{
                console.log("Usuario creado", data.user.uid)
                setAlert({variant:"success",text:"Usuario creado con éxito"})
                firebase.db.collection("usuarios").add({
                    nombre: form.nombre,
                    apellido: form.apellido,
                    email: form.email,
                    userId: data.user.uid
                })
                .then((data)=>{
                    setSpinner(false);
                    console.log(data)
                })
                .catch((err)=>{
                    console.log(err)
                    setSpinner(false);
                })
        })
        .catch((error)=>{
            console.log("Error", error)
            setSpinner(false);
            setAlert({variant:"danger",text:"Ocurrió un error. Inténtelo nuevamente."})
        })
            e.preventDefault();
    }
    
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
      setForm({
          ...form,
          [name] : value});
    }

    return ( 
        <Card style={{ width: '25em', margin:'auto', top:'50px'}}>
            <Card.Body>
                <Card.Title>Registro</Card.Title>
            
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Ingresar apellido" name="apellido" value={form.apellido} onChange={handleChange} />
                    </Form.Group>

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
                        Registrarse
                    </Button>
                </Form>
                <AlertCustom variant={alert.variant} text={alert.text} /> 
            </Card.Body>
        </Card>
    )    
}

export default Register;