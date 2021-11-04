import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const GroupButtons = () => {
    return (
        <div>
        <ButtonGroup>
        <>
  <Button variant="outline-day">Day</Button>{' '}
  <Button variant="month">Month</Button>{' '}
  <Button variant="year">Year</Button>{' '}
  <Button variant="year">Submit</Button>{' '}
</>
        </ButtonGroup>
        </div>
    )
}

export default GroupButtons
