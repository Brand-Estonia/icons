import * as React from "react";
import { forwardRef } from "react";
const Chat = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.742 9.98h7.998m-7.998 4.007h4.999m-3.07 6.738c4.8 1.289 9.734-1.565 11.02-6.375 1.286-4.809-1.562-9.752-6.362-11.04-4.8-1.29-9.734 1.565-11.02 6.374a9.02 9.02 0 001.613 7.9L3.743 22" /></svg>;
const ForwardRef = forwardRef(Chat);
export { ForwardRef as ReactComponent };