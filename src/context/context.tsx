import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../shared/utils/firebase";
import { useLocalStorage } from "../shared/utils/hooks";
import { client } from "../shared/utils/sanityClient";
import { blogsQuery, singleBlogQuery } from "../shared/utils/sanityQueries";

type IContext = {
  blogs?: object[];
  currentUser?: unknown;
  setCurrentUser?: (currentUser: unknown) => void;
  signInWithGoogle?: () => void;
  signUserOut?: () => void;
  likeBlog?: () => void;
};

export const GlobalContext = createContext<IContext>({});

const GlobalProvider = ({ children }: any) => {
  const [blogs, setBlogs] = useLocalStorage("blogs", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const location = useLocation();
  const navigate = useNavigate();

  //auth
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setCurrentUser(result.user);

        const { displayName, photoURL, uid } = result.user;

        const doc = {
          _id: uid,
          _type: "user",
          userName: displayName,
          image: photoURL,
          bio: "No bio",
          bookmarks: [],
        };

        client.createIfNotExists(doc).then(() => {
          navigate("/", { replace: true });
        });
      })
      .catch((err) => console.log(err));
  };

  // const emailSignIn = (formData: { email: string; password: string }) => {
  //   signInWithEmailAndPassword(auth, formData.email, formData.password)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const emailSignUp = (formData: { email: string; password: string }) => {
  //   createUserWithEmailAndPassword(auth, formData.email, formData.password)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const signUserOut = () => {
    Modal.confirm({
      title: "Are you sure you want to sign out?",
      icon: <ExclamationCircleFilled />,
      content: "Feel free to sign back in any time.",
      onOk() {
        signOut(auth)
          .then(() => {
            setCurrentUser(null);
          })
          .catch((err) => console.log(err));
      },
    });
  };

  const getAllBlogs = () => {
    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
    });
  };

  const likeBlog = (blogId: string) => {
    if (currentUser) {
      client
        .patch(blogId)
        .setIfMissing({ likes: [] })
        .insert("after", "likes[-1]", [
          {
            _key: uuidv4(),
            user: {
              _type: "user",
              _ref: currentUser.uid,
            },
          },
        ])
        .commit()
        .then(() => {});
    } else {
      navigate("/auth");
    }
  };

  const unlikeBlog = () => {};

  const commentOnBlog = () => {};

  const bookmarkBlog = () => {};

  useEffect(() => {
    location.pathname === "/" && getAllBlogs();
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        blogs,
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        signUserOut,
        likeBlog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
