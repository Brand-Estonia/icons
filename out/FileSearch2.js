import * as React from "react";
import { forwardRef } from "react";
const FileSearch2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 10.5V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22h2.7M14 11H8m2 4H8m8-8H8m14 15-1.5-1.5m1-2.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0" /></svg>;
const ForwardRef = forwardRef(FileSearch2);
export { ForwardRef as ReactComponent };