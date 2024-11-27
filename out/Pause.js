import * as React from "react";
import { forwardRef } from "react";
const Pause = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16.2V5H5v14h5m9-2.8V5h-5v14h5" /></svg>;
const ForwardRef = forwardRef(Pause);
export { ForwardRef as ReactComponent };