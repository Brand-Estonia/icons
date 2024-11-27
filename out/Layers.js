import * as React from "react";
import { forwardRef } from "react";
const Layers = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 10-10 6-10-6 10-6 6.25 3.75M22 15l-10 6-10-6" /></svg>;
const ForwardRef = forwardRef(Layers);
export { ForwardRef as ReactComponent };