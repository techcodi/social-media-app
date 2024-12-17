import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function ContextProvider({ children }) {
  const [uplaodImage, setUpLoadImage] = useState(null);
  const [showPostForm, setShowPostForm] = useState();
  const [text, setText] = useState("");
  const [post, setPost] = useState([]);

  function handleShowPostForm() {
    setShowPostForm((showPostForm) => !showPostForm);
  }
  function closeForm() {
    setShowPostForm(null);
  }

  const handleUpLoadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUpLoadImage(previewUrl);
    }
  };

  function handlePost(e) {
    e.preventDefault();

    if (text || uplaodImage) {
      setPost([...post, { text, uplaodImage }]);
      setText("");
      setUpLoadImage(null);
      setShowPostForm(false);
    }
  }

  return (
    <DataContext.Provider
      value={{
        handleUpLoadImage,
        uplaodImage,
        handlePost,
        text,
        setText,
        post,
        handleShowPostForm,
        showPostForm,
        closeForm,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function getProps() {
  const context = useContext(DataContext);
  if (context === undefined) throw new Error("Something went wrong!");
  return context;
}

export { ContextProvider, getProps };
