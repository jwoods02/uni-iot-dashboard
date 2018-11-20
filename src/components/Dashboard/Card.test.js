import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Cards';

it('renders without crashing', () =>
    {
      const div = document.createElement('div');
      ReactDOM.render(<Card />, div);
    }
);

describe("<Card />", () => {
it('Matches a snapshot', () => {
    const card = renderer.create(<Card/>).toJSON();
    expect(card).toMatchSnapshot();
})
});

// todo : component jest testing