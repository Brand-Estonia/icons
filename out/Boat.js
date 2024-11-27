import * as React from "react";
import { forwardRef } from "react";
const Boat = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11V5h-3V2H9v3M6 8.1V5h6m8.51 9.91L21 12l-9-3-9 3 1 6s3-1 4-3c0 0 1 3 4 3s4-3 4-3c1 2 4 3 4 3M2 22c4 0 5.62-2 5.62-2S9 22 12 22s4.38-2 4.38-2S18 22 22 22" /></svg>;
const ForwardRef = forwardRef(Boat);
export { ForwardRef as ReactComponent };