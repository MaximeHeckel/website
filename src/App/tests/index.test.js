import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '../';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});