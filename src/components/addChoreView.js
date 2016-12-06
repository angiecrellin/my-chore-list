import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddChoreView = ({ addChore }) => (
  <Form
    onSubmit={ (event) => {
      event.preventDefault()
      let userInput = event.target.input.value
      if(userInput === '') {
        return false
      }
      addChore(userInput)
      event.target.input.value = ''
    }}
    
  >
    <FormGroup controlId="formInlineName">
      <FormControl name="input" type="text" bsSize="large" placeholder="Enter Chore and Expected Time to Complete" text-align="center" />
        </FormGroup>
          <Button type="submit" bsSize="large" bsStyle="danger">
          Add Chore to List
          </Button>
  </Form>
)


export default AddChoreView