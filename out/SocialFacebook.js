const React = require('react');
const {
  forwardRef
} = require('react');
const SocialFacebook = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M13 17.9821V14H15.9754L16.7951 10H13V7C13 6.35714 13.3443 6 14 6H17.5V2H14C11 2 9.00004 4 9.00004 7.125V10H6L6 14H9.00004L9 22H13" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(SocialFacebook);