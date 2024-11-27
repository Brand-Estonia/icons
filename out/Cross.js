const React = require('react');
const {
  forwardRef
} = require('react');
const Cross = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5 19.0001L19 5.00006M5 5.00006L9 9.00006M15 15.0001L19 19.0001" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Cross);