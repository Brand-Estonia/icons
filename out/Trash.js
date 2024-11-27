const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Trash = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M18.0033 8.5L18 20.0149L16.4125 21H7.47865L6 20.0263L6.00326 8.57693M10 21L10.0033 8.5M14 21L14.0033 8.5M19 5H15V3H9V5H5" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Trash);
export default ForwardRef;

module.exports = forwardRef(Trash);