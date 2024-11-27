import * as React from "react";
import { forwardRef } from "react";
const Visible = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.079 17.467C15.656 18.36 13.955 19 12 19c-5.186 0-8.589-4.505-9.732-6.287-.138-.215-.207-.323-.246-.49a1.2 1.2 0 010-.446c.039-.167.108-.274.246-.49C3.411 9.505 6.814 5 12 5s8.589 4.505 9.732 6.287c.138.215.207.323.246.49.03.125.03.322 0 .446-.039.167-.108.274-.246.49a17.5 17.5 0 01-1.393 1.876M15.048 12c0 1.657-1.365 3-3.048 3s-3.047-1.343-3.047-3S10.317 9 12 9s3.047 1.343 3.047 3" /></svg>;
const ForwardRef = forwardRef(Visible);
export { ForwardRef as ReactComponent };