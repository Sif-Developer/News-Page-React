import React, { useContext, useEffect, } from "react";
import { GlobalContext } from "../../context/GlobalState";


const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  const aNew = news.map((aNew) => {
    return (
      <div>
        <p>{aNew.title}</p>
        <p>{aNew.abstract}</p>
        <p>{aNew.multimedia}</p>
      </div>
    );
  });

  return <div>ListNews{aNew}</div>;
};

export default ListNews;
