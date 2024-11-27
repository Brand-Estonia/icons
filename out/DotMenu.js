import * as React from "react";
import { forwardRef } from "react";
const DotMenu = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M12 7a2 2 0 100-4 2 2 0 000 4m0 7a2 2 0 100-4 2 2 0 000 4m0 7a2 2 0 100-4 2 2 0 000 4" /></svg>;
const ForwardRef = forwardRef(DotMenu);
export { ForwardRef as ReactComponent };