import SourcedRSSComponent from "./rss/sourcedRSS";
import Parser from "rss-parser";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../hocs/languageContext";
import axios from 'axios';
type CustomFeed = { foo: string };
type CustomItem = { bar: number };

function Blog() {
  const parser: Parser<CustomFeed, CustomItem> = new Parser({});
  const [SOfeed, setSOFeed] = useState();
  const [MDfeed, setMDFeed] = useState();

  useEffect(() => {
    axios.get("https://stackoverflow.com/feeds/user/10509394").then((res: any)=>{
      return parser
        .parseString(res.data)
        .then((res: any) => setSOFeed(res))
        .catch(err => { console.error(err); });
    })
    axios.get("https://medium.com/feed/@jackson-ramalho").then((res: any)=>{
      return parser
        .parseString(res.data)
        .then((res: any) => setMDFeed(res))
        .catch(err => { console.error(err); });
    })
    
  });

  const data = useContext(LanguageContext).data;

  return (
    <aside className="blog aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">
          {data.section_name.blog}
        </h2>
        <div id="rss-feeds-SO" className="content"></div>
        <div id="rss-feeds-Medium" className="content"></div>
        <div>
          <SourcedRSSComponent feed={SOfeed} />
          <SourcedRSSComponent feed={MDfeed}/>
        </div>
      </div>
    </aside>
  );
}

export default Blog;
