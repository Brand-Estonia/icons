const React = require('react');
const {
  forwardRef
} = require('react');
const SocialXing = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M6 16H2.5L6.5 9L4 5H8L10.5 9L8.5 12.4999M19 7.99991L15.5 14L20 22H16L11.5 14L18.5 2L22.5 1.99991L21 4.49991" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(SocialXing);