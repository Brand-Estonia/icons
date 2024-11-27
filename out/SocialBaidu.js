import * as React from "react";
import { forwardRef } from "react";
const SocialBaidu = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 17.465a4 4 0 111.667-1.864M7.556 7.364V3.318c0-1.363-1.112-1.818-1.778-1.818C5.11 1.5 4 1.955 4 3.318v10.5C4 18.364 7.582 22 12 22s8-3.663 8-8.182C20 9.3 16.418 6 12 6q-.463.001-.889.05M11 14a1 1 0 11-2 0 1 1 0 012 0" /></svg>;
const ForwardRef = forwardRef(SocialBaidu);
export { ForwardRef as ReactComponent };