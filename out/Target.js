const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Target = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M19 12C19 8.13401 15.866 5 12 5M19 12C19 14.1693 18.0132 16.1081 16.4641 17.3921M19 12H22M12 5C8.13401 5 5 8.13401 5 12M12 5V2M5 12C5 15.866 8.13401 19 12 19V22M5 12H2M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Target);
export default ForwardRef;

module.exports = forwardRef(Target);