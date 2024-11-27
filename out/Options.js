import * as React from "react";
import { forwardRef } from "react";
const Options = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H2m20 0h-4m0 0a3 3 0 11-6 0 3 3 0 016 0m4-9h-7M6 8H2m4 0a3 3 0 106 0 3 3 0 00-6 0" /></svg>;
const ForwardRef = forwardRef(Options);
export { ForwardRef as ReactComponent };