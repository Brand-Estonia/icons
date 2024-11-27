const React = require('react');
const {
  forwardRef
} = require('react');
const Collapse = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M22 10.0003L14 10.0003V2.00031M2 13.9998L10 13.9998L10 21.9998" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Collapse);