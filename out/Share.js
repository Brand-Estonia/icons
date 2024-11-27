import * as React from "react";
import { forwardRef } from "react";
const Share = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12.5a2.5 2.5 0 111.5 2.292M17.5 8a2.5 2.5 0 112.292-1.5M17.5 21a2.5 2.5 0 112.292-1.5M8.5 11l6.767-4.374M8.5 14l6.767 3.374" /></svg>;
const ForwardRef = forwardRef(Share);
export { ForwardRef as ReactComponent };