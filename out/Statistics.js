const React = require('react');
const {
  forwardRef
} = require('react');
const Statistics = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M21 12V7M21 7H16M21 7L13 15L9 11L3 17" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Statistics);