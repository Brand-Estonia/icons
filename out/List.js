const React = require('react');
const {
  forwardRef
} = require('react');
const List = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M23 6V2H9V6H19.5M23 14V10H9V14H19.5M23 22V18H9V22H19.5M1 2H5V6H1V2ZM1 10H5V14H1V10ZM1 18H5V22H1V18Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(List);