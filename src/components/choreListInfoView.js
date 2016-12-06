import React from 'react'
import { PageHeader } from 'react-bootstrap'

const ChoreListInfoView = ({ count }) => {
  console.log(count)
  return (
    <div>
      {count < 1 ? <PageHeader>My Chore List</PageHeader> : <PageHeader>Total Chores: { count }</PageHeader> }
    </div>
  )
}

export default ChoreListInfoView