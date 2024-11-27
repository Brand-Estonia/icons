import * as React from "react";
import { forwardRef } from "react";
const Hiking = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11 13 4 2v6m4-10h-4l-3-3-4 13M19 9v12M9.34 6.81l-1.71 5.34M5 11l1.19-3.37M14 4a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(Hiking);
export { ForwardRef as ReactComponent };