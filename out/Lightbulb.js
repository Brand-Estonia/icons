import * as React from "react";
import { forwardRef } from "react";
const Lightbulb = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v1m-9 9H2m3.5-6.5-.6-.6m13.6.6.6-.6M22 12h-1m-5.5 4.874a6 6 0 10-7 0V18.8c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C10.02 22 10.58 22 11.7 22h.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874c.121-.238.175-.516.199-.908M10 13.5h4m-2 0v5" /></svg>;
const ForwardRef = forwardRef(Lightbulb);
export { ForwardRef as ReactComponent };