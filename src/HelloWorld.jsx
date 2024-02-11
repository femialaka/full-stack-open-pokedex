import React from 'react'

const HelloWorld = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
)

export default HelloWorld