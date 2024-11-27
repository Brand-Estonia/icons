import * as React from "react";
import { forwardRef } from "react";
const Link = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8H6a4 4 0 100 8h4m4 0h4a4 4 0 000-8h-4m-7 4h10" /></svg>;
const ForwardRef = forwardRef(Link);
export { ForwardRef as ReactComponent };