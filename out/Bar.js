const React = require('react');
const {
  forwardRef
} = require('react');
const Bar = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M7 20H17M12 20V14L4 4H20L14 11.5M8 8H13" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Bar);