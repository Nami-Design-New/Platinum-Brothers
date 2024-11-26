import { Route, Routes } from "react-router-dom";
import Header from "./ui/layout/Header";
import router from "./router";
import Footer from "./ui/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
