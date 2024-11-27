import * as React from "react";
import { forwardRef } from "react";
const Loading = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.059 20C16.445 20 20 16.418 20 12s-3.555-8-7.941-8C8.986 4 6.32 5.759 5 8.331M12 4a8 8 0 107.111 11.669" /></svg>;
const ForwardRef = forwardRef(Loading);
export { ForwardRef as ReactComponent };