import * as React from "react";
import { forwardRef } from "react";
const Statistics = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12V7m0 0h-5m5 0-8 8-4-4-6 6" /></svg>;
const ForwardRef = forwardRef(Statistics);
export { ForwardRef as ReactComponent };