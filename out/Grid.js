const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Grid = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M6 2H2V6H6V2Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2H10V6H14V2Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2H18V6H22V2Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10H2V14H6V10Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M14 10H10V14H14V10Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10H18V14H22V10Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M6 18H2V22H6V18Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M14 18H10V22H14V18Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 18H18V22H22V18Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Grid);
export default ForwardRef;

module.exports = forwardRef(Grid);