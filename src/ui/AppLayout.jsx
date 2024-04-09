import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(isLoading);
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
        <CartOverview />
      </main>
    </div>
  );
}

export default AppLayout;
