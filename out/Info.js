import * as React from "react";
import { forwardRef } from "react";
const Info = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v1.5m0 4V18m-8 4h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2" /></svg>;
const ForwardRef = forwardRef(Info);
export { ForwardRef as ReactComponent };