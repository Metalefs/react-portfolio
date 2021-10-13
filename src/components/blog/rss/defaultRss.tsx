import rssEnhancer from 'react-rss';
 
const DefaultRSSComponent = (props:any) => (
    <div>
        <h2>{props.label}</h2>
        <a href={props.rss.header.link}>
            {props.rss.header.title}
        </a>
        <ul>
            {props.rss.items.map((item:any) => (
                <li>
                    {item.description}
                </li>
            ))}
        </ul>
    </div>
);
 
export default rssEnhancer(
    DefaultRSSComponent,
    "https://medium.com/feed/@jackson-ramalho",
);