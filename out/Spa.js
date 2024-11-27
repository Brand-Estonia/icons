import * as React from "react";
import { forwardRef } from "react";
const Spa = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17s0-6 8-6v1c0 4.42-3.58 8-8 8s-8-3.58-8-8v-1c3.26 0 5.19.99 6.33 2.17m3.59-7.83C13.06 4.06 12 3 12 3S9 6 9 8c2 1 3 2 3 2s1-1 3-2" /></svg>;
const ForwardRef = forwardRef(Spa);
export { ForwardRef as ReactComponent };