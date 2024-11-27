const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Restaurant = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M7 20V4M10 4V8.29C10 9.39 9.1 10.29 8 10.29H6C4.9 10.29 4 9.39 4 8.29V4M19 20V4C19 4 15 5.97 15 8V12L16.48 13.44" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Restaurant);
export default ForwardRef;

module.exports = forwardRef(Restaurant);