import { useState, useContext } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import { useFormik } from "formik";
import './badbank.css';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Create() {
  const [email, setEmail] = useState("");

  const [val,setVal]=useState("none")
  const [vale,setVale]=useState("block")
  const [fom,setFom]=useState('block')
  const user = useContext(userContext);
  
  const Formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    onSubmit:(values)=>{
      alert("successfully your account is created")
      user.users = [...user.users, { name: values.name, email:email, balance: 0 }];     
      document.getElementById("create").reset(); 
      setVal("block")
setVale("none")
setFom("none")    
    },
    validate:(values)=>{
            let errors={};
            if(!values.name) errors.name="Required";
            if (!values.email) {
              errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            
            if(!values.password) errors.password="Field Required"
            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)){
              errors.password="Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character";
            }
            return errors;
    }
  })
  return (
    <>
  <Card style={{ width: '48rem' }} className="create">
  <h1 className="mb-4">Create Your Account</h1>
      <Card.Body>
      <form className="create-form p-3 rounded shadow" style={{display:`${fom}`}} id="create" onSubmit={Formik.handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">Name:</label>
          <input type="text" className="form-control" id="name" onChange={Formik.handleChange} values={Formik.values.name} />
          {Formik.errors.name?<div style={{color:"red"}}>{Formik.errors.name}</div>:null}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email:</label>
          <input type="text" className="form-control" id="email" onChange={Formik.handleChange} values={Formik.values.email} />
          {Formik.errors.email?<div style={{color:"red"}}>{Formik.errors.email}</div>:null}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Password:</label>
          <input type="password" className="form-control" id="password" onChange={Formik.handleChange} values={Formik.values.password} /> 
          {Formik.errors.password?<div style={{color:"red"}}>{Formik.errors.password}</div>:null}
        </div>
        <button type="submit" className="btn btn-primary" style={{display:`${vale}`}} disabled={!Formik.isValid}>Submit</button>
      </form>
    
      <Button variant="primary" id="ad"style={{display:`${val}`}} onClick={()=>{setFom("block");setVal("none");setVale("block")}}  type="button">Add Another account</Button>
       
      </Card.Body>
    </Card>
  
 
    </>
  );
}

