const React = require('react');
const {
  forwardRef
} = require('react');
const Search1 = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5 9V5H9M9 19H5V15M19 15V19H15M15 5H19V9" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Search1);