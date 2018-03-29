import React, { Component } from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import { dataServices } from '../../service/dataService';

class AddCommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: ''
        };
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      dataServices.addComment({
          body : this.state.value,
        postId : this.props.postId
        })
        .then((result) => {
          this.setState({
            value: ''
          })
          this.props.invalidate()
        })
    }


    render() {
      return (
        <Container id='addCommentForm'>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </Form.Field>
          <Button type="submit" value="Submit" disabled={this.state.value?false:true} id="submitCommentButton">SEND</Button>
        </Form>
        </Container>
      );
    }
  }

  export default AddCommentForm;