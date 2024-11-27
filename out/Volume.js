import * as React from "react";
import { forwardRef } from "react";
const Volume = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16h4.29L13 20V5L7.1 9H3v4M17 3s4 2.4 4 9.6-4 8.4-4 8.4m0-13v8" /></svg>;
const ForwardRef = forwardRef(Volume);
export { ForwardRef as ReactComponent };