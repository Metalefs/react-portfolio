import SourcedRSSComponent from "./rss/sourcedRSS";
import Parser from "rss-parser";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../hocs/languageContext";
type CustomFeed = { foo: string };
type CustomItem = { bar: number };

function Blog() {
  const parser: Parser<CustomFeed, CustomItem> = new Parser({});
  const [SOfeed, setSOFeed] = useState();
  const [MDfeed, setMDFeed] = useState();

  useEffect(() => {
    parser
      .parseURL("https://stackoverflow.com/feeds/user/10509394")
      .then((res: any) => setSOFeed(res))
      .catch(err=>{console.error(err)});
    parser
      .parseURL("https://medium.com/feed/@jackson-ramalho")
      .then((res: any) => setMDFeed(res))
      .catch(err=>{console.error(err)});
  }, []);

  const data = useContext(LanguageContext).data;

  return (
    <aside className="blog aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">
          {data.basic_info.section_name.blog}
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
