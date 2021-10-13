import React, { useContext, useEffect, useState } from "react";
import GitHubCalendar from "github-calendar";
import GitHubFeed from 'react-github-activity';
import { LanguageContext } from "../../hocs/languageContext";

function Github() {
  const fullName = "Jackson Geid";
  const userName = "Metalefs";
  const avatarUrl = "https://avatars.githubusercontent.com/u/40893204?v=4";
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    
    async function fetchData() {
    
      setEvents(await (await fetch('https://api.github.com/users/Metalefs/events')).json());
      // ...
      GitHubCalendar(".calendar", userName)
    }
    fetchData();
  },[])

  const data = useContext(LanguageContext).data;

  return (
    <section className="github section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{data.basic_info.section_name.github}</h2>

        <div class="calendar">
        </div>
        <GitHubFeed
          fullName={fullName} // Provide Full Name as displayed on GitHub
          userName={userName} // Provide User Name as displayed on Guthub
          avatarUrl={avatarUrl} // Provide the avatar url of your github profile
          events={events} // provide array of events using the users '/events' endpoint of github api
        />
      </div>
    </section>
  );
}

export default Github;
