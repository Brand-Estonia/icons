const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Translate = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M3 5H17M10 5V3M13 21L17 11L21 21M15 18H17M4 18C7 17 13 10 13 5M6 9C6 9 8 13 11 15" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Translate);
export default ForwardRef;

module.exports = forwardRef(Translate);