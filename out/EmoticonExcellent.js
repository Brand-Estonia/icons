const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonExcellent = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><g clipPath="url(#clip0_6769_106)"><path d="M18 21.2211C16.2744 22.3462 14.2136 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.2136 22.3462 16.2744 21.2211 18M17 14H7C7 16.7614 9.23858 19 12 19C13.6358 19 15.0882 18.2144 16.0004 17M8 10V8M16 10V8" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_6769_106"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>;
module.exports = forwardRef(EmoticonExcellent);