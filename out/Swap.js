import * as React from "react";
import { forwardRef } from "react";
const Swap = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8H4m0 0 3 3M4 8l3-3M6 16h14m0 0-3-3m3 3-3 3" /></svg>;
const ForwardRef = forwardRef(Swap);
export { ForwardRef as ReactComponent };