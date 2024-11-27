import * as React from "react";
import { forwardRef } from "react";
const SocialGoogle = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.64 21.65C18.88 20.49 22 16.61 22 12v-2H12v4h5.68l-.1.31c-.91 2.16-3.04 3.69-5.54 3.69-3.31 0-6-2.69-6-6s2.69-6 6-6c1.35 0 2.6.45 3.6 1.2l2.79-2.86A9.97 9.97 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10" /></svg>;
const ForwardRef = forwardRef(SocialGoogle);
export { ForwardRef as ReactComponent };