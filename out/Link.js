const React = require('react');
const {
  forwardRef
} = require('react');
const Link = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M10 8H6C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16H10M14 16H18C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8L14 8M7 12H17" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Link);