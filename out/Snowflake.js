import * as React from "react";
import { forwardRef } from "react";
const Snowflake = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.066 4 12 5 9.934 4M12 15v7m-2.066-2L12 19l2.066 1m6.901-12.96-6.281 3.47c-.713.39-.62 1.49-.62 1.49 0 1.1-.93 2-2.066 2s-2.066-.9-2.066-2c0-.79.465-1.47 1.147-1.79 0 0 .919-.4.919-1.21V2m8.203 7.77L18.28 8.53l-.124-2.24m-8.843 7.2-6.28 3.47m.764-2.73 1.921 1.24.134 2.24m3.461-7.2-6.28-3.47m.764 2.73 1.921-1.24.134-2.24m8.213 7.2 6.281 3.47m-.764-2.73-1.922 1.24-.134 2.24" /></svg>;
const ForwardRef = forwardRef(Snowflake);
export { ForwardRef as ReactComponent };