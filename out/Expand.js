const React = require('react');
const {
  forwardRef
} = require('react');
const Expand = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 4.00049L20 4.00049V12.0005M12 20H4V12" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Expand);