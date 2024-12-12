import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AdminMaster() {
  const nav = useNavigate();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
        nav("/login");
      setTimeout(() => {
       
        toast.error("Please Login First");
      }, 500);
    }
  }, []);
  return (
    <>
      <AdminHeader />
      <Outlet />
      <AdminFooter />
    </>
  );
}
