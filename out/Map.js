const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Map = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M15 8V17M9 8V17M3 7.57895L8.99995 4L15 7.57895L21 4V17.4211L15 21L8.99995 17.4211L3 21V7.57895Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Map);
export default ForwardRef;

module.exports = forwardRef(Map);