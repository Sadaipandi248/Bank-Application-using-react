import bank from "../src/image/bank.jpg"
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
export default function Home(){
    return(
        <>
     <Card style={{ width: '18rem',marginLeft:'490px' }} className="home">
      <Card.Img variant="top" src={bank} />
      <Card.Body>
        <Card.Title>Bad Bank Project</Card.Title>
        <Card.Text>
        WELCOME
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
         <Card.Link href="#/Create">Create An Account</Card.Link>
      </Card.Body>
    </Card>
        </>
    )
}
