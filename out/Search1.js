import * as React from "react";
import { forwardRef } from "react";
const Search1 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9V5h4m0 14H5v-4m14 0v4h-4m0-14h4v4" /></svg>;
const ForwardRef = forwardRef(Search1);
export { ForwardRef as ReactComponent };