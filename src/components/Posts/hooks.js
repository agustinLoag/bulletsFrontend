import { useEffect, useState, useMemo } from "react";
import { getPosts } from "../../api";

const usePost = () => {
  const [post, setPost] = useState(null);
  const [showPost, setShowPost] = useState(null);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await getPosts();
    data ? setPost(data) : setIsError(error);
  };

  const onChangePage = (page, pageSize) => {
    console.log(page, pageSize);
    setCurrentPage(page);
    setCurrentPageSize(pageSize);
  };

  const currentTableData = useMemo(() => {
    console.log({currentPageSize, currentPage}, "post");
    if (post) {
      const firstPageIndex = (currentPage - 1) * currentPageSize;
      const lastPageIndex = firstPageIndex + currentPageSize;
      const res = post.slice(firstPageIndex, lastPageIndex);
      console.log(res, "res")
      setShowPost(res)
    }
  }, [currentPage, currentPageSize, post]);

  return {
    post,
    isError,
    onChangePage,
    currentTableData,
    showPost
  };
};

export default usePost;
