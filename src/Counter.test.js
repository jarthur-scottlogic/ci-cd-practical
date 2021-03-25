import React from 'react';
import { shallow, configure } from 'enzyme';
import Counter from './Counter';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const getCounter = counterWrapper => counterWrapper.find('.Counter');
const getCountMessage = counterWrapper => getCounter(counterWrapper).find('.Counter-Count');
const getIncrementButton = counterWrapper => getCounter(counterWrapper).find('.Counter-Button.Counter-Increment');
const getDecrementButton = counterWrapper => getCounter(counterWrapper).find('.Counter-Button.Counter-Decrement');

it('renders without crashing', () => {
  shallow(<Counter />);
});

describe('initial state', () => {
  it('renders a default count message, with a count of 0', () => {
    const counter = shallow(<Counter />);

    // TODO: the following expectation is incorrect. The expected result should be: "You clicked 0 times".
    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');
  });

  it('renders a button', () => {
    const counter = shallow(<Counter />);
    expect(getIncrementButton(counter).exists()).toBe(true);
  });

  it('renders a button with text "Increment"', () => {
    const counter = shallow(<Counter />);
    expect(getIncrementButton(counter).text()).toBe('Increment');
  });
});

describe('increasing the count', () => {
  it('increases the count by one when the increment button is clicked once', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 1 times');
  });

  it('increases the count by two when the increment button is clicked twice', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 2 times');
  });

  it('increases the count by five when the increment button is clicked five times', () => {
    const counter = shallow(<Counter />);

    expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');
    getIncrementButton(counter).simulate('click');

    expect(getCountMessage(counter).text()).toBe('You clicked 5 times');
  });
});

describe('decreasing the count', () => {
    it('decreases the count by one when the decrement button is clicked once', () => {
        const counter = shallow(<Counter />);

        expect(getCountMessage(counter).text()).toBe('You clicked 0 times');

        getDecrementButton(counter).simulate('click');

        expect(getCountMessage(counter).text()).toBe('You clicked -1 times');
        
    });
})