import * as React from "react";
import { forwardRef } from "react";
const File1 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437c.214.11.494.11 1.054.11H20zm0 0H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 19.72 20 18.88 20 17.2V12m-4 1H8m8 4H8m2-8H8" /></svg>;
const ForwardRef = forwardRef(File1);
export { ForwardRef as ReactComponent };