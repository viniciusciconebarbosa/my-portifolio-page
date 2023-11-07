import { render } from '@testing-library/react';
import Header from './header';
import React from 'react';

test("testing a component", async () => {

  const {getByText} = render(
  <Header>Hi am Vinicius</Header>
  )

  expect(getByText('Hi am Vinicius')).toBeTruthy();
});

