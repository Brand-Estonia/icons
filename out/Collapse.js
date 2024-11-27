import * as React from "react";
import { forwardRef } from "react";
const Collapse = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 10h-8V2M2 14h8v8" /></svg>;
const ForwardRef = forwardRef(Collapse);
export { ForwardRef as ReactComponent };