import * as React from "react";
import { forwardRef } from "react";
const Cloud = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.05 19c2.734 0 4.95-2.159 4.95-4.821 0-2.511-1.97-4.574-4.488-4.801C17.997 6.328 15.278 4 12 4S6.003 6.327 5.488 9.378C2.97 9.605 1 11.668 1 14.178 1 16.842 3.216 19 5.95 19h7.7" /></svg>;
const ForwardRef = forwardRef(Cloud);
export { ForwardRef as ReactComponent };