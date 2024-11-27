const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Mute = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M17 3C17 3 21 5.4 21 12.6C21 14.6 20.69 16.14 20.24 17.32M17 8V14M8.58 8L7.1 9H3V13M13 9V5L11.15 6.25M3 16H7.29L13 20V13.65M4 2L20 22" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Mute);
export default ForwardRef;

module.exports = forwardRef(Mute);