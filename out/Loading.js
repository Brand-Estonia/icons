const React = require('react');
const {
  forwardRef
} = require('react');
const Loading = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12.0588 20C16.4446 20 20 16.4183 20 12C20 7.58172 16.4446 4 12.0588 4C8.98565 4 6.3202 5.75861 5 8.33138" stroke="#F0F1F2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C15.0959 20 17.7811 18.2414 19.1111 15.6686" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Loading);