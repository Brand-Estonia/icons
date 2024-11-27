import * as React from "react";
import { forwardRef } from "react";
const SocialPinterest = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 22 2.5-11.5m-5.756 8.383C.94 14.878 1.107 8.548 5.113 4.744s10.335-3.637 14.14.369c3.803 4.005 3.637 10.335-.37 14.139a10 10 0 01-6.882 2.746m-5.3-7.192a5.993 5.993 0 012.483-8.105c2.926-1.55 6.563-.442 8.115 2.48a6 6 0 01.7 2.81c0 3.308-2.465 5.91-5.553 4.713C11 16.143 10 14.5 10 13.5" /></svg>;
const ForwardRef = forwardRef(SocialPinterest);
export { ForwardRef as ReactComponent };