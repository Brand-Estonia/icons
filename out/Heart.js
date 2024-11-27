import * as React from "react";
import { forwardRef } from "react";
const Heart = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.727 18.347c2.813-2.419 7.921-5.796 5.75-10.133-1.62-3.255-6.11-4.358-8.473-1.46-2.61-3.21-7.572-1.728-8.776 2.13C1.64 13.965 8.752 18.101 11.858 21" /></svg>;
const ForwardRef = forwardRef(Heart);
export { ForwardRef as ReactComponent };