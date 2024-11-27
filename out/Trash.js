import * as React from "react";
import { forwardRef } from "react";
const Trash = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.003 8.5 18 20.015 16.413 21H7.479L6 20.026l.003-11.45M10 21l.003-12.5M14 21l.003-12.5M19 5h-4V3H9v2H5" /></svg>;
const ForwardRef = forwardRef(Trash);
export { ForwardRef as ReactComponent };