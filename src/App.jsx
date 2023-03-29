import { useState } from "react";
import { Button, Layout } from "antd";
import "antd/dist/reset.css";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

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
