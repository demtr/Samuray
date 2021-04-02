import './index.css';
// Недефолтное экспортированное имя импортируем в фигурных скобках
import {renderFullTree} from "./render";
import state from "./redux/state";

renderFullTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
