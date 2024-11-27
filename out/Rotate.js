import * as React from "react";
import { forwardRef } from "react";
const Rotate = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5a8 8 0 00-7.196 11.5M18 18.292a7.95 7.95 0 001.985-4.792m-1.37-5c.319.467.589.97.804 1.5M7 19.245A7.97 7.97 0 0012 21a8 8 0 003-.581M10.98 2l3.331 3.332-3.331 3.331" /></svg>;
const ForwardRef = forwardRef(Rotate);
export { ForwardRef as ReactComponent };