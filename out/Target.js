import * as React from "react";
import { forwardRef } from "react";
const Target = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12a7 7 0 00-7-7m7 7c0 2.17-.987 4.108-2.536 5.392M19 12h3M12 5a7 7 0 00-7 7m7-7V2M5 12a7 7 0 007 7v3M5 12H2m10 3a3 3 0 113-3" /></svg>;
const ForwardRef = forwardRef(Target);
export { ForwardRef as ReactComponent };