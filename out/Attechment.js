const React = require('react');
const {
  forwardRef
} = require('react');
const Attechment = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3.17454 13.0031L12.1902 3.98746C14.2404 1.93721 17.5645 1.93721 19.6148 3.98746C21.665 6.03771 21.665 9.36183 19.6148 11.4121L10.5992 20.4277C9.23233 21.7945 7.01625 21.7945 5.64942 20.4277C4.28258 19.0609 4.28258 16.8448 5.64942 15.4779L14.3115 6.81589C14.9949 6.13247 16.1029 6.13247 16.7864 6.81589C17.4698 7.49931 17.4698 8.60734 16.7864 9.29076L9.18495 16.8922" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
module.exports = forwardRef(Attechment);