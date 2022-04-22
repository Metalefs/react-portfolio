import { useContext } from "react";
import { LanguageContext } from "../../hocs/languageContext";

function SongItem(props:any) {
  return (
    <div className="experience-card">
      <span className="iconify mr-2" data-icon="twemoji:headphone"></span>

      <a href={props.song.href} target="_blank" rel="noreferrer">
        {props.song.name}
      </a>
    </div>
  );
}

function Music() {
  const songs = [
    {
      href: "https://music.youtube.com/watch?v=BbBwXisS-7s&feature=share",
      name: "Anime Soundtracks",
      key: 1,
    },
    {
      href: "https://music.youtube.com/watch?v=2nw8fo_0u6c&feature=share",
      name: "LO-FI Relax",
      key: 2,
    },
    {
      href: "https://music.youtube.com/watch?v=HSaYE3oqMI8&feature=share",
      name: "Vaporwave!",
      key: 3,
    },
  ];
  const data = useContext(LanguageContext).data;

  return (
    <aside className="list music aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{data.section_name.music}</h2>
        <div className="content">
          <ul className="list-unstyled">
            {songs.map(song => <SongItem key={song.key} song={{...song}}/>)}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Music;
