import * as React from "react";
import { forwardRef } from "react";
const Fingerprint = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.807 18.53.054-.089A13.9 13.9 0 008 11a4 4 0 118 0q-.002 1.527-.203 3m-2.118 6.844A22 22 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4M12 11c0 3.517-1.009 6.799-2.753 9.571" /></svg>;
const ForwardRef = forwardRef(Fingerprint);
export { ForwardRef as ReactComponent };