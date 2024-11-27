const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Plane = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M9.84 13.12V16.34L7.68 18.71L8.32 21L12 19.44L15.72 21L16.36 18.71L14.2 16.34V13.12L21.04 15.51V13.23C21.04 12.57 20.67 11.97 20.08 11.66L13.82 8.37999V5.28999C13.82 4.56999 13.51 2.98999 12.02 2.98999C10.53 2.98999 10.22 4.56999 10.22 5.28999V8.37999L3.96 11.66C3.37 11.97 3 12.57 3 13.23V15.51L6.69 13.9" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Plane);
export default ForwardRef;

module.exports = forwardRef(Plane);