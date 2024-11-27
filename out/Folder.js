import * as React from "react";
import { forwardRef } from "react";
const Folder = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13 7-1.116-2.231c-.32-.642-.481-.963-.72-1.198a2 2 0 00-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 4.52 2 5.08 2 6.2V7m0 0h15.2c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C22 9.28 22 10.12 22 11.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C19.72 21 18.68 21 17 21M2 7v9.2c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C4.28 21 5.12 21 6.8 21H13" /></svg>;
const ForwardRef = forwardRef(Folder);
export { ForwardRef as ReactComponent };