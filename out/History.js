import * as React from "react";
import { forwardRef } from "react";
const History = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.44 17.75A7.998 7.998 0 0020 12c0-4.42-3.58-8-8-8s-8 3.58-8 8v2m8-6v4l3 2M1 12l3 3 3-3" /></svg>;
const ForwardRef = forwardRef(History);
export { ForwardRef as ReactComponent };