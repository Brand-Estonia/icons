const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonNeutralFilled = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="#000" /><path d="M8 16H16M8 10V8M16 10V8" stroke="white" strokeWidth={2} strokeLinecap="round" /></svg>;
module.exports = forwardRef(EmoticonNeutralFilled);