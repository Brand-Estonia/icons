const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Spa = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 17C12 17 12 11 20 11V12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12V11C7.26 11 9.19 11.99 10.33 13.17M13.92 5.34C13.06 4.06 12 3 12 3C12 3 9 6 9 8C11 9 12 10 12 10C12 10 13 9 15 8" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Spa);
export default ForwardRef;

module.exports = forwardRef(Spa);