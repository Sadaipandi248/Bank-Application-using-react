import { useContext } from "react"
import userContext from "./context"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './badbank.css'
export default function Widthdraw(){
    let user=useContext(userContext)
    const len=user.users.length
    const[balance,setBalance]=useState(user.users[len-1].balance);
    const[widthdraw,setWidthraw]=useState(0)
    function handle(e){

        e.preventDefault();
        if(widthdraw >= 0 && widthdraw <=balance){
            setBalance(balance-widthdraw);
        }else{
           alert("please enter valid amount") 
        }
    }
    user.users[len-1].balance=balance
    return(
        <>
        <Card style={{ width: '33rem' }} className="widthdraw">
      <Card.Body>
       <h1 className="width">Widthdraw Your Account</h1>
        <form onSubmit={handle}>
        
        <input type="text" id="deposit" onChange={(e)=>setWidthraw(Number(e.target.value))} required /><br />
        <Button type="submit" >widthdraw</Button>
        <h1>Balance status{balance}</h1>
        </form>
      </Card.Body>
    </Card>
      
        </>
    )
}
