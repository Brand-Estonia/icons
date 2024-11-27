import * as React from "react";
import { forwardRef } from "react";
const Bed = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16v-3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6m18-3H6m15 0v3M4 8.46V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3-2.86M14.32 6H18c1.1 0 2 .9 2 2v3" /></svg>;
const ForwardRef = forwardRef(Bed);
export { ForwardRef as ReactComponent };