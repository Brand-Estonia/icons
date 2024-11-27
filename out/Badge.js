import * as React from "react";
import { forwardRef } from "react";
const Badge = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18.85 5.43 1.96.35-.5 3.54 2.49 2.57-2.49 2.57.5 3.54-3.52.62-1.68 3.16-2.17-1.06-1.04-.51-3.21 1.57-1.68-3.16L3.99 18l.5-3.54L2 11.89l2.49-2.57-.5-3.54 3.52-.62L9.19 2l3.21 1.57L15.61 2l.85 1.6M8.4 11.89l3 3 5-6" /></svg>;
const ForwardRef = forwardRef(Badge);
export { ForwardRef as ReactComponent };