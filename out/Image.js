import * as React from "react";
import { forwardRef } from "react";
const Image = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.28 18.97C3.64 19.58 4.3 20 5.06 20h13.87c1.14 0 2.07-.92 2.07-2.07V13l-5-3-5 5-4-2-4 3V6.07C3 4.93 3.92 4 5.07 4h13.87c1.14 0 2.07.92 2.07 2.07v3.45M9 9a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(Image);
export { ForwardRef as ReactComponent };