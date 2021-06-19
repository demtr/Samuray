import SocialNetApp from "./App";
import ReactDOM from "react-dom";

test('renders SocialNetApp without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialNetApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
