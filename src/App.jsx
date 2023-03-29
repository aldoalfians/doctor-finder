import { Layout } from "antd";
import "antd/dist/reset.css";
import Home from "./pages/home";

function App() {
  return (
    <main>
      <Layout>
        <div className="container">
          <Home />
        </div>
      </Layout>
    </main>
  );
}

export default App;
