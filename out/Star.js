const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Star = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M15.5 19.5L12.2621 16.7515L5.64706 21L8.29412 14.1242L3 9.86105H9.88235L11.9737 3L14.1876 9.86105L21 9.87576L16.2353 14.1242L18.8824 21" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Star);
export default ForwardRef;

module.exports = forwardRef(Star);