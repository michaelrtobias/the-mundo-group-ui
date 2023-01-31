import { useLocation } from "react-router-dom";

const BrandPage = () => {
  const location = useLocation();

  return <h1>{location.pathname} Page</h1>;
};

export default BrandPage;
