const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Warning = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><g clipPath="url(#clip0_3983_620)"><path d="M12 18V16.5M12 12.5L12 6M1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id="clip0_3983_620"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Warning);
export default ForwardRef;

module.exports = forwardRef(Warning);