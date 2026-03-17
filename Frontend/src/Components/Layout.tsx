import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import PrivateHeader from "./PrivateHeader";

export default function Layout() {
  const isLoggedIn = ():boolean => {
    // LoggedIn api call will be done here
    return false;
  }
  return (
    <>
      {isLoggedIn()? <PrivateHeader/> : <PublicHeader/>}
      <Outlet />
    </>
  );
}
