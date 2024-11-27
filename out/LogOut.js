const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const LogOut = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M15 17L20 12M20 12L15 7M20 12H8.5M10 3H7.5C6.10218 3 5.40326 3 4.85195 3.22836C4.11687 3.53284 3.53284 4.11687 3.22836 4.85195C3 5.40326 3 6.10217 3 7.5V16.5C3 17.8978 3 18.5967 3.22836 19.1481C3.53284 19.8831 4.11687 20.4672 4.85195 20.7716C5.40326 21 6.10218 21 7.5 21H10" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(LogOut);
export default ForwardRef;

module.exports = forwardRef(LogOut);