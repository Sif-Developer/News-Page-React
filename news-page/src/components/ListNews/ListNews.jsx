import React, { useContext, useEffect, } from "react";
import { GlobalContext } from "../../context/GlobalState";


const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    console.log("ey")
    getNews();
  }, []);

  const aNew = news?.map((aNew) => {
    return (
      <div>
        <p>{aNew.headline.main}</p>
        <p>{aNew.abstract}</p>
        <p>{aNew.pub_date}</p>
        <br/>
      </div>
    );
  });

  return <div>NEWS LIST{aNew}</div>;
};

export default ListNews;
