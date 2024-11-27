import * as React from "react";
import { forwardRef } from "react";
const Undo = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5 8H14a5 5 0 010 10h-4M8 5 5 8l3 3" /></svg>;
const ForwardRef = forwardRef(Undo);
export { ForwardRef as ReactComponent };