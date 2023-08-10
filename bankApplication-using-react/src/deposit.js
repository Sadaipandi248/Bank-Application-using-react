import { useState } from "react"
import userContext from "./context";
import { useContext } from "react";
import { useFormik } from "formik";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./badbank.css"
export default function Deposite(){
  const user = useContext(userContext);
  let length = user.users.length;
  let [balance, setBalance] = useState(user.users[length - 1].balance);
  user.users[length - 1].balance = balance
 const formik=useFormik({
    initialValues: {
      amount: ""
    },
onSubmit:values=>{
  setBalance(Number(balance+Number(values.amount)));
  

},
validate:values=>{
  let errors={};
  if(!values.amount) errors.amount="Required";
  if(values.amount !== "" && isNaN(parseFloat(values.amount))) errors.amount = "plese enter Numbers only allowed";
  if(values.amount < 0) errors.amount = "plese enter valid amount";
return errors
}
  })
 return (
  <>
 <Card style={{ width: '28rem' }} className="dep">
     
      <Card.Body>
      <form onSubmit={formik.handleSubmit}>
    
<h1  className="balance-heading">Deposit your account</h1>
        <input type="text" id="deposite-input"  className="form-control" name="amount" onChange={formik.handleChange} value={formik.values.amount} />
        {formik.errors.amount ? <div className="error-message" style={{color:"red"}}>{formik.errors.amount}</div>:null}
        <Button type="submit" disabled={!(formik.isValid)}>deposit</Button>
        <h1>Balance status{balance}</h1>
      </form>
      </Card.Body>
    </Card>
     
      </>
  );
}
