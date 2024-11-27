const React = require('react');
const {
  forwardRef
} = require('react');
const Undo = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M5.5 8L14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18H10M8 5L5 8L8 11" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Undo);