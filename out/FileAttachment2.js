import * as React from "react";
import { forwardRef } from "react";
const FileAttachment2 = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C16.72 2 15.88 2 14.2 2H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C3 4.28 3 5.12 3 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 22 6.12 22 7.8 22h3.7m0-11H7m3.5 4H7m8-8H7m10 11v-5.5a1.5 1.5 0 013 0V18a3 3 0 11-6 0v-4" /></svg>;
const ForwardRef = forwardRef(FileAttachment2);
export { ForwardRef as ReactComponent };