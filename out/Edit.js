import * as React from "react";
import { forwardRef } from "react";
const Edit = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 10-4-4m-2.905 10.904 3.302-3.301L21 7a2.828 2.828 0 10-4-4L3.794 16.206c-.294.294-.442.441-.553.61a2 2 0 00-.233.486c-.063.193-.086.4-.132.814L2.5 21.5l3.384-.376c.414-.046.62-.07.814-.132a2 2 0 00.485-.233c.17-.112.317-.259.61-.553l.826-.825" /></svg>;
const ForwardRef = forwardRef(Edit);
export { ForwardRef as ReactComponent };