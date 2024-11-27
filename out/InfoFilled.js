import * as React from "react";
import { forwardRef } from "react";
const InfoFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm8 6.5a1 1 0 01-1-1V6a1 1 0 112 0v1.5a1 1 0 01-1 1M12 19a1 1 0 01-1-1v-6.5a1 1 0 112 0V18a1 1 0 01-1 1" /></svg>;
const ForwardRef = forwardRef(InfoFilled);
export { ForwardRef as ReactComponent };