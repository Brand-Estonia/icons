const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const FAQLight = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M8 8.00537C8.36294 7.00332 9.07931 6.15836 10.0222 5.62014C10.9651 5.08192 12.0738 4.88517 13.1517 5.06475C14.2297 5.24433 15.2074 5.78865 15.9118 6.60129C16.6161 7.41393 17.0016 8.44246 17 9.5047C17 12.5034 13.5 13 12.5077 15M12.4923 20H12.5077" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(FAQLight);
export default ForwardRef;

module.exports = forwardRef(FAQLight);