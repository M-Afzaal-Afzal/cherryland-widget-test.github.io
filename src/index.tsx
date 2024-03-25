import r2wc from "@r2wc/react-to-web-component";
import { CherryLandWidget } from "./components/CherryLandWidget";

const wcChecklist = r2wc(CherryLandWidget, { props: { items: "json" } });

customElements.define("cherry-land-widget", wcChecklist);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
