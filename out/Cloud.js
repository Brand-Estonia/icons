const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Cloud = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M18.05 19C20.7838 19 23 16.8414 23 14.1786C23 11.6676 21.0293 9.60496 18.5123 9.3779C17.9974 6.32728 15.2777 4 12 4C8.72227 4 6.0026 6.32728 5.48772 9.3779C2.97066 9.60496 1 11.6676 1 14.1786C1 16.8414 3.21619 19 5.95 19C8.55103 19 10.7039 19 13.1 19H13.65" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Cloud);
export default ForwardRef;

module.exports = forwardRef(Cloud);