const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const ArrowUp = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12.0018 22.0001L12.0018 8.00012M5.00183 9.00012L12.0018 2.00012L19.0018 9.00012" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(ArrowUp);
export default ForwardRef;

module.exports = forwardRef(ArrowUp);