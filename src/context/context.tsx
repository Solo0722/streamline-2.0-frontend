import React, { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../shared/utils/hooks";
import { client } from "../shared/utils/sanityClient";
import { blogsQuery, singleBlogQuery } from "../shared/utils/sanityQueries";

type IContext = {
  blogs?: object[];
};

export const GlobalContext = createContext<IContext>({});

const GlobalProvider = ({ children }: any) => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const location = useLocation();

  const getAllBlogs = () => {
    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
    });
  };

  

  useEffect(() => {
    location.pathname === "/" && getAllBlogs();
  }, [location]);

  return (
    <GlobalContext.Provider value={{ blogs }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
