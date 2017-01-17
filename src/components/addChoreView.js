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
    <FormGroup controlId="formInlineName" bsSize="large">
      <FormControl name="input" type="text" bsSize="large" placeholder="Enter Chore and Expected Time to Complete" />
        </FormGroup>
          <Button type="submit" bsSize="large" bsStyle="warning">
          Add Chore to List
          </Button>
  </Form>
)


export default AddChoreView