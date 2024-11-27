const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const EmoticonGoodFilled = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><circle cx={12} cy={12} r={11} fill="#000" /><path d="M7.28467 15C7.97106 16.942 9.82313 18.3333 12.0002 18.3333C14.1772 18.3333 16.0293 16.942 16.7156 15M8 10V8M16 10V8" stroke="white" strokeWidth={2} strokeLinecap="round" /></svg>;
const ForwardRef = forwardRef(EmoticonGoodFilled);
export default ForwardRef;

module.exports = forwardRef(EmoticonGoodFilled);