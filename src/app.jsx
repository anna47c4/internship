import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { createBrowserRouter, RouterProvider } from "react-router-dom"; */
import { useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cases from "./pages/Cases";
import NoPage from "./pages/NoPage";
import SoloProject from "./pages/SoloProject";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollButton from "./components/ScrollButton";
import allCases from "./allcases.json";
/* import Casedata, { loader as caseLoader } from "./routes/casedata";
import Test from "./routes/test"; */

export function App() {
  const caseData = allCases;
  /*   const router = createBrowserRouter({
    path: "solo/:id",
    element: <Solo caseData={caseData} />,
    loader: soloLoader,
  }); */
  /*   const router = createBrowserRouter([
    {
      path: "/",
      element: <Test caseData={caseData} />,
    },
    {
      path: "casedata/:id",
      element: <Casedata caseData={caseData} />,
      loader: caseLoader,
    },
  ]); */
  /*  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  /*   window.scrollTo(0, 0); */
  return (
    <>
      {/*    <RouterProvider router={router} /> */}
      <ScrollButton></ScrollButton>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cases" element={<Cases caseData={caseData} />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="soloproject/*"
              element={<SoloProject caseData={caseData} />}
            />
            <Route path="*" element={<NoPage />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
