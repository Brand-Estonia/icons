import * as React from "react";
import { forwardRef } from "react";
const FileError2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 10.5V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22H12m2-11H8m2 4H8m8-8H8m7.879 13.121L18 18m0 0 2.121-2.121M18 18l-2.121-2.121M18 18l2.121 2.121" /></svg>;
const ForwardRef = forwardRef(FileError2);
export { ForwardRef as ReactComponent };