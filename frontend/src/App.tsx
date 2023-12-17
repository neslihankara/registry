import { Route, Router } from "@solidjs/router";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      {/* <Route path="/create" component={Room} /> */}
      <Route path="/lists/:id" component={() => <h1>users</h1>} />
    </Router>
  );
}

export default App;
