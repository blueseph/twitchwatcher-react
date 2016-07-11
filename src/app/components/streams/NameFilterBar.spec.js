// import React from 'react';
// import TestUtils from 'react-addons-test-utils';
// import NameFilterBar from './NameFilterBar';
//
// function setup(overrides) {
//   const props = Object.assign({
//     dispatch: jasmine.createSpy(),
//     actions: {
//       filterName: jasmine.createSpy(),
//     },
//   }, overrides);
//
//   const renderer = TestUtils.createRenderer();
//   renderer.render(<NameFilterBar {...props} />);
//   const output = renderer.getRenderOutput();
//
//   return {
//     props,
//     output,
//     renderer,
//   };
// }
//
// describe('name filter bar component', () => {
//   it('should render', () => {
//     const { output } = setup();
//
//     console.log(output);
//
//     expect(output.type).toBe('div');
//     expect(output.props.className).toBe('name-filter-bar');
//   });
// });
