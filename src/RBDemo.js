import React, { useState } from 'react';
import { Container, Jumbotron, ToastHeader } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const RBDemo = ()=>{
    const [show,setShow] = useState(false);

    return(
        <Container className="p-3">
        <Jumbotron>
            <Toast onClose={()=> setShow(false)} show={show}>
                <Toast.Header>
                    Sample Toast from react bootstrap
                </Toast.Header>
                <Toast.Body>
                    Say hello toast!!
                </Toast.Body>
                <Button onClick={()=> setShow(true)}>Test Toast</Button>
            </Toast>
        </Jumbotron>
    </Container>

    );
}

export default RBDemo;