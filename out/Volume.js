const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Volume = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3 16H7.29L13 20V5L7.1 9H3V13M17 3C17 3 21 5.4 21 12.6C21 19.8 17 21 17 21M17 8V16" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Volume);
export default ForwardRef;

module.exports = forwardRef(Volume);