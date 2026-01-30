import { Outlet } from "react-router-dom";
import Header from "./Componets/header/Header";
import Sidebar from "./Componets/sidebar/Sidebar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Layout = () => {
  return (
  <div className="container-fluid p-0">
  {/* Header */}
  <Header />

  {/* Main Layout */}
  <div className="row g-0">
    {/* Sidebar */}
    <div className="col-12 col-md-3 col-lg-2">
      <Sidebar />
    </div>

    {/* Content */}
    <div className="col-12 col-md-9 col-lg-10">
      <main className="px-3 ps-5 pt-3">
        <Outlet />
      </main>
    </div>
  </div>
</div>

  );
};

export default Layout;
