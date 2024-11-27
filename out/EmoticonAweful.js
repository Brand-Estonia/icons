const React = require('react');
const {
  forwardRef
} = require('react');
const EmoticonAweful = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><g clipPath="url(#clip0_6769_98)"><path d="M18 21.2211C16.2744 22.3462 14.2136 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.2136 22.3462 16.2744 21.2211 18M10 10L6 8M14 10L18 8M8 12V10M16 12V10M8 18C8.86287 16.794 10.3323 16 12 16C13.6677 16 15.1371 16.794 16 18" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_6769_98"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>;
module.exports = forwardRef(EmoticonAweful);