import * as React from "react";
import { forwardRef } from "react";
const Translate = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h14m-7 0V3m3 18 4-10 4 10m-6-3h2M4 18c3-1 9-8 9-13M6 9s2 4 5 6" /></svg>;
const ForwardRef = forwardRef(Translate);
export { ForwardRef as ReactComponent };