import * as React from "react";
import { forwardRef } from "react";
const Cross = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19 19 5M5 5l4 4m6 6 4 4" /></svg>;
const ForwardRef = forwardRef(Cross);
export { ForwardRef as ReactComponent };