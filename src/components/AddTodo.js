import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AddTodo extends React.Component {
  
    render(){
        return(
            <Container >
              <Row>
              <Col>
                <form style={{ display: 'flex' }}>
                <input type="text" name="name"
                style={{ flex: '8' , padding: '5px' }} 
                placeholder ="Add Todo..." />

                <input type="submit" value="submit" className="btn" style={{ flex: '1' }}/>
             
               </form>
              </Col>
            </Row>
            </Container>
        );
    }
}
export default AddTodo; 