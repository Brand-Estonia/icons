const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Leaf = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M12 22V7M12 14.27L8.88 12.18M12.17 16.63L15.55 14.04M12.2 11.45L14.48 9.52M12 20C12 20 19 19 19 14C19 7 12 2 12 2C12 2 5 7 5 14C5 16.82 7.23 18.37 9.17 19.18" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Leaf);
export default ForwardRef;

module.exports = forwardRef(Leaf);