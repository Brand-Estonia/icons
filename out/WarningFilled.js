import * as React from "react";
import { forwardRef } from "react";
const WarningFilled = (props, ref) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" ref={ref} {...props}><path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m1 5a1 1 0 10-2 0v6.5a1 1 0 102 0zm0 10.5a1 1 0 10-2 0V18a1 1 0 102 0z" /></svg>;
const ForwardRef = forwardRef(WarningFilled);
export { ForwardRef as ReactComponent };