import { Outlet } from "react-router-dom";
import { SiteFooter } from "../home/SiteFooter";
import { SiteHeader } from "../home/SiteHeader";

export function MainLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
