import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./ui/layout/Header";
import router from "./router";
import Footer from "./ui/layout/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
