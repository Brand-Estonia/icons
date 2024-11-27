import * as React from "react";
import { forwardRef } from "react";
const SearchError = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4-4m-7.5-1a6.5 6.5 0 10-3.807-1.23M8 8l3 3m-3 0 3-3" /></svg>;
const ForwardRef = forwardRef(SearchError);
export { ForwardRef as ReactComponent };