const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const SocialYoutube = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M14.0298 20H4.99405C2.76786 20 1 18.2295 1 16V8C1 5.77049 2.76786 4 4.99405 4H19.006C21.2321 4 23 5.77049 23 8V16C23 18.2295 21.2321 20 19.006 20H18.0238M10 12.9836V16L16 12L10 8" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SocialYoutube);
export default ForwardRef;

module.exports = forwardRef(SocialYoutube);