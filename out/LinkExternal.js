const React = require('react');
const {
  forwardRef
} = require('react');
const LinkExternal = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M4.5 19.5L14 10M8 6H18V15.5" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(LinkExternal);