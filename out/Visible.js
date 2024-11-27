const React = require('react');
const { forwardRef } = require('react');

import * as React from "react";
import { forwardRef } from "react";
const Visible = (props, ref) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}><path d="M17.0787 17.4669C15.6562 18.3599 13.9548 19 12 19C6.81418 19 3.41127 14.4952 2.26805 12.7132C2.12971 12.4975 2.06054 12.3897 2.02181 12.2234C1.99273 12.0985 1.99273 11.9015 2.02181 11.7766C2.06054 11.6103 2.12971 11.5025 2.26805 11.2868C3.41127 9.50484 6.81418 5 12 5C17.1858 5 20.5887 9.50484 21.7319 11.2868C21.8703 11.5025 21.9395 11.6103 21.9782 11.7766C22.0073 11.9015 22.0073 12.0985 21.9782 12.2234C21.9395 12.3897 21.8703 12.4975 21.7319 12.7132C21.4554 13.1443 21.0465 13.7348 20.5122 14.3822C20.4558 14.4506 20.3981 14.5195 20.3389 14.5889M15.0475 12C15.0475 13.6569 13.6831 15 12 15C10.3169 15 8.95251 13.6569 8.95251 12C8.95251 10.3431 10.3169 9 12 9C13.6831 9 15.0475 10.3431 15.0475 12Z" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(Visible);
export default ForwardRef;

module.exports = forwardRef(Visible);