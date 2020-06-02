import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
             textDecoration: this.props.todo.isComplete ?
                'Line-through' : 'none'
        }
    }

    //<input type="checkbox" onChange={this.props.markComplete}/>  {" "}
    // <div className="removeBtn" onClick={this.props.removeTodo.bind(this, id)}>
    // x
    // </div>
    render() {
      const { id, name } = this.props.todo;
      return(
        <Container>
       
          <div className="todo-container" style={this.getStyle()}>
          <Row className="show-grid">
            <Col>
              <div className="todo-item" onClick={this.props.markComplete.bind(this, id)}>
                { name } 

                </div>
              </Col>

              <Col>
              
                <button class="removeBtn" alt="removebtn" onClick={this.props.removeTodo.bind(this, id)}>x</button>
             </Col>
             </Row>
           </div>
         
          </Container>
      );
   }
  }

  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  export default TodoItem;
  