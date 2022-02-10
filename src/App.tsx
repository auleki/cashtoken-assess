import React from 'react';
import Layout from "./layout/Layout";
import PageRoutes from "./routes/PageRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <PageRoutes />
    </Layout>
  );
}

export default App;
