import * as React from "react";
import { forwardRef } from "react";
const Attechment = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3.175 13.003 9.015-9.016a5.25 5.25 0 117.425 7.425l-9.016 9.016a3.5 3.5 0 01-4.95-4.95l8.663-8.662a1.75 1.75 0 012.474 2.475l-7.601 7.601" /></svg>;
const ForwardRef = forwardRef(Attechment);
export { ForwardRef as ReactComponent };