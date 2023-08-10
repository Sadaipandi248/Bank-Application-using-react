import { useContext } from "react"
import userContext from "./context.js"
import Card from 'react-bootstrap/Card';

export default function Alldata(){
    const user=useContext(userContext);
    return(
        <>
         <Card style={{ width: '28rem' }} className="alldata">
      <Card.Body>
       <h1 className="all">Alldata</h1>
        <h1>{user.users.map((item,key)=><li>{item.name}{item.balance}</li>)}</h1>
       
      </Card.Body>
    </Card>
          
        </>
    )
}
