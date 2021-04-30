import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Routes from '../../components/Routes';

describe('Routes', () => {
  it('renders Routes ', () => {
    const tree = renderer.create(<Routes />);
    expect(tree).toMatchSnapshot();
  });
});
