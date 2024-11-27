const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Heart = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M14.7269 18.347C17.5399 15.9281 22.6481 12.5506 20.4765 8.2144C18.8563 4.95947 14.3669 3.85592 12.0041 6.75414C9.39368 3.5438 4.43171 5.02635 3.22779 8.88322C1.64131 13.9662 8.75234 18.1018 11.8578 21" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Heart);
export default ForwardRef;

module.exports = forwardRef(Heart);