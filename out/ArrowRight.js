import * as React from "react";
import { forwardRef } from "react";
const ArrowRight = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h14m-1-7 7 7-7 7" /></svg>;
const ForwardRef = forwardRef(ArrowRight);
export { ForwardRef as ReactComponent };