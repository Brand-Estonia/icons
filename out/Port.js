const React = require('react');
const {
  forwardRef
} = require('react');
const Port = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M9 11H15M12 8V20M4 15C4 15 6 21 12 21C18 21 20 15 20 15M18.17 15H21V17.83M5.83 15H3V17.83M14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Port);