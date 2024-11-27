import * as React from "react";
import { forwardRef } from "react";
const List2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h12M9 12h12M9 19h12M5 5a1 1 0 11-2 0 1 1 0 012 0m0 7a1 1 0 11-2 0 1 1 0 012 0m0 7a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(List2);
export { ForwardRef as ReactComponent };