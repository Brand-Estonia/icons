import * as React from "react";
import { forwardRef } from "react";
const Users = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 21v-2a4 4 0 00-3-3.874M15.5 3.291a4.001 4.001 0 010 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 00-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 00-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 11-8 0 4 4 0 018 0" /></svg>;
const ForwardRef = forwardRef(Users);
export { ForwardRef as ReactComponent };