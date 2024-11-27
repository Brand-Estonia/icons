const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Home = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M20 10V20C20 20.5523 19.5523 21 19 21H16C15.4477 21 15 20.5523 15 20V15C15 14.4477 14.5523 14 14 14H10C9.44772 14 9 14.4477 9 15V20C9 20.5523 8.55229 21 8 21H5C4.44772 21 4 20.5523 4 20V15M22.5 12.5L13.4142 3.41422C12.6332 2.63317 11.3668 2.63317 10.5858 3.41422L1.5 12.5" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Home);
export default ForwardRef;

module.exports = forwardRef(Home);