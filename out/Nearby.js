import * as React from "react";
import { forwardRef } from "react";
const Nearby = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V3a9 9 0 105.74 2.067M12 7a5 5 0 103 1m-2 4a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(Nearby);
export { ForwardRef as ReactComponent };