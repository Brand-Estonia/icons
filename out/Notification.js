import * as React from "react";
import { forwardRef } from "react";
const Notification = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.5 17H5.389c-1.196 0-1.795 0-1.927-.098-.147-.11-.186-.179-.2-.361-.014-.165.353-.755 1.088-1.936C5.22 13.206 6 11.09 6 8a6 6 0 1112 0c0 2.366.457 4.16 1.062 5.5M9.354 21c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1" /></svg>;
const ForwardRef = forwardRef(Notification);
export { ForwardRef as ReactComponent };