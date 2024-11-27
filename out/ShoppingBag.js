const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const ShoppingBag = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M13 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V10C20 8.89543 19.1046 8 18 8H16M16 12.5V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V12.5" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(ShoppingBag);
export default ForwardRef;

module.exports = forwardRef(ShoppingBag);