const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const SocialTwitter = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M16.0025 7.50372L20.0037 3.00505M3.99897 20.9997L8.00016 16.501L9.00046 15.3764L10.0008 14.2517M21 21L20.9989 20.9986L16.0136 20.9986L3 3L7.99426 3.00221L14.4966 12.0004L17.7477 16.4995L18.5605 17.6243" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SocialTwitter);
export default ForwardRef;

module.exports = forwardRef(SocialTwitter);