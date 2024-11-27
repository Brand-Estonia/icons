const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Boat = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M18 11V5H15V2H9V5M6 8.1V5H12M20.51 14.91L21 12L12 9L3 12L4 18C4 18 7 17 8 15C8 15 9 18 12 18C15 18 16 15 16 15C17 17 20 18 20 18M2 22C6 22 7.62 20 7.62 20C7.62 20 9 22 12 22C15 22 16.38 20 16.38 20C16.38 20 18 22 22 22" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Boat);
export default ForwardRef;

module.exports = forwardRef(Boat);