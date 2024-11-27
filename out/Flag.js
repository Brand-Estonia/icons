import * as React from "react";
import { forwardRef } from "react";
const Flag = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19V5l9 4.203-6.136 3.575" /></svg>;
const ForwardRef = forwardRef(Flag);
export { ForwardRef as ReactComponent };