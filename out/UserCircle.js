import * as React from "react";
import { forwardRef } from "react";
const UserCircle = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.684 19.438A4 4 0 0015 17H9c-.703 0-1.364.181-1.938.5M21.168 16A10 10 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.56 0 4.895-.962 6.664-2.544M16 9.5a4 4 0 11-8 0 4 4 0 018 0" /></svg>;
const ForwardRef = forwardRef(UserCircle);
export { ForwardRef as ReactComponent };