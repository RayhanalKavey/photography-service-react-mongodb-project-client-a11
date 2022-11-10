import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Photo Bizz - ${title}`;
  }, [title]);
};
export default useTitle;
