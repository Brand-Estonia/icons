const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const List2 = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M9 5H21M9 12H21M9 19H21M5 5C5 5.55228 4.55228 6 4 6C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5ZM5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18C4.55228 18 5 18.4477 5 19Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(List2);
export default ForwardRef;

module.exports = forwardRef(List2);