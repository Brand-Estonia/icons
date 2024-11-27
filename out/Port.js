import * as React from "react";
import { forwardRef } from "react";
const Port = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11h6m-3-3v12m-8-5s2 6 8 6 8-6 8-6m-1.83 0H21v2.83M5.83 15H3v2.83M14 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2" /></svg>;
const ForwardRef = forwardRef(Port);
export { ForwardRef as ReactComponent };