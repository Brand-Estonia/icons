import * as React from "react";
import { forwardRef } from "react";
const SocialLinkedin = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.199 17.69v-7.442c0-.912-.751-1.644-1.684-1.644h-.83C2.75 8.604 2 9.342 2 10.248v10.746h4.205m7.538-3.304v-1.98c0-3.858 5.07-4.17 5.07 0v3.63c0 .916.75 1.66 1.678 1.66h.83C22.25 21 23 20.262 23 19.345v-5.888c0-6.509-7.499-6.274-9.263-3.07v-.128c0-.912-.745-1.65-1.672-1.65h-.825c-.928 0-1.673.738-1.673 1.65V21h4.176M4.093 6.093c-1.15 0-2.082-.917-2.082-2.047C2.01 2.917 2.944 2 4.093 2c1.15 0 2.082.917 2.082 2.046" /></svg>;
const ForwardRef = forwardRef(SocialLinkedin);
export { ForwardRef as ReactComponent };