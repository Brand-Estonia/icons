const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonPoorFilled = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="#000" /><path d="M8 17C8.86287 15.794 10.3323 15 12 15C13.6677 15 15.1371 15.794 16 17M8 10V8M16 10V8" stroke="white" strokeWidth={2} strokeLinecap="round" /></svg>;
module.exports = forwardRef(EmoticonPoorFilled);