const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const SearchError = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M21 21L17 17M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 11.4414 3.8511 13.184 5.20054 14.375C5.3582 14.5142 5.52268 14.6458 5.69339 14.7693M8 8L11 11M8 11L11 8" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SearchError);
export default ForwardRef;

module.exports = forwardRef(SearchError);