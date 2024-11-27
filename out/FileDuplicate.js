import * as React from "react";
import { forwardRef } from "react";
const FileDuplicate = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17V4.759C4 3.787 4.83 3 5.855 3H16M8.85 7h10.3c.47 0 .85.38.85.85v12.3c0 .47-.38.85-.85.85H8.85a.85.85 0 01-.85-.85V7.85c0-.47.38-.85.85-.85" /></svg>;
const ForwardRef = forwardRef(FileDuplicate);
export { ForwardRef as ReactComponent };