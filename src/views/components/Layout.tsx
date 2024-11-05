import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://63ef9eead37e842b.mokky.dev/cosmetic"
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
