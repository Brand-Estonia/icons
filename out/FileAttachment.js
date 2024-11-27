import * as React from "react";
import { forwardRef } from "react";
const FileAttachment = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 17c0 1.68 0 2.72-.327 3.362a3 3 0 01-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C20 4.28 20 5.12 20 6.8V13m-8 1V8.5a1.5 1.5 0 013 0V14a3 3 0 11-6 0v-4" /></svg>;
const ForwardRef = forwardRef(FileAttachment);
export { ForwardRef as ReactComponent };