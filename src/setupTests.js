//import 'jest-enzyme';
//import 'jsdom-global/register';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import raf from './tempPolyfills'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// global.requestAnimationFrame = function(callback) {
//     setTimeout(callback, 0);
// };


configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;


