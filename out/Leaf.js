import * as React from "react";
import { forwardRef } from "react";
const Leaf = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22V7m0 7.27-3.12-2.09m3.29 4.45 3.38-2.59m-3.35-2.59 2.28-1.93M12 20s7-1 7-6c0-7-7-12-7-12S5 7 5 14c0 2.82 2.23 4.37 4.17 5.18" /></svg>;
const ForwardRef = forwardRef(Leaf);
export { ForwardRef as ReactComponent };