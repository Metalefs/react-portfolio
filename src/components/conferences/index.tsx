import { useContext } from "react";
import { LanguageContext } from "../../hocs/languageContext";

function Conferences() {
  const data = useContext(LanguageContext).data;

  return (
    <aside className="list conferences aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{data.basic_info.section_name.conferences}</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li>
              <span className="iconify" data-icon="bi:calendar-event"></span>{" "}
              <a href="." target="_blank">
                SQL Saturday 2020
              </a>{" "}
              (Belo Horizonte)
            </li>
            <li>
              <span className="iconify" data-icon="bi:calendar-event"></span>{" "}
              <a href=".">Dev Summit 2021</a> (Online)
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Conferences;
