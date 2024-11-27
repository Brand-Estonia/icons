const React = require('react');
const {
  forwardRef
} = require('react');
const Hiking = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M11 13L15 15V21M19 11H15L12 8L8 21M19 9V21M9.34 6.81L7.63 12.15M5 11L6.19 7.63M14 4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4C12 3.44772 12.4477 3 13 3C13.5523 3 14 3.44772 14 4Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Hiking);