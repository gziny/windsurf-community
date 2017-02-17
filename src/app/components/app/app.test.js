import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { App } from './app';

describe('App Component', () => {

  it('should be defined', () => {
    const component = shallow(h(App));
    expect(component).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const component = shallow(h(App));
    expect(component.hasClass('app')).toEqual(true);
  });
  
});
