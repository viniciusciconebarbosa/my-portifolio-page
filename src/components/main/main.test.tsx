import { screen, render } from '@testing-library/react';
import App from './main';
import React from 'react';
import '@testing-library/jest-dom'

test("testing a component", async  () => {

  render(
    <App></App>
  )

const result = expect(screen.findByText('Hi i am Vinicius!')).toBeInTheDocument()

});
