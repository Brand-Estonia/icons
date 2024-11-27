const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const EmoticonExcellentFilled = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="#000" /><path d="M17 14H7C7 16.7614 9.23858 19 12 19C13.6358 19 15.0882 18.2144 16.0004 17M8 10V8M16 10V8" stroke="white" strokeWidth={2} strokeLinecap="round" /></svg>;
const ForwardRef = forwardRef(EmoticonExcellentFilled);
export default ForwardRef;

module.exports = forwardRef(EmoticonExcellentFilled);