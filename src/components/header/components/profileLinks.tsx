import './profileLinks.scss'

function ProfileLinks() {

  const listItems = [
    {
      href:'https://www.linkedin.com/in/jackson-pires-ramalho-58a2a080/?lipi=urn%3Ali%3Apage%3Aprofile_view_index_index%3BMshv4qvWT6SUQ9jWQxm5RA%3D%3D',
      icon:'akar-icons:linkedin-fill',
      key:5,
    },
    {
      href:'https://github.com/Metalefs/',
      icon:'akar-icons:github-fill',
      key:4,
    },
    {
      href:'https://stackoverflow.com/users/10509394/jackson-pires',
      icon:'akar-icons:stack-overflow-fill',
      key:3,
    },
    {
      href:'https://codepen.io/metalefs-the-reactor',
      icon:'akar-icons:codepen-fill',
      key:2,
    },
]

  return (
    <ul className="social list-inline">
      {/* <li className="list-inline-item">
        <a href="#." className="disabled">
          <i className="fab fa-twitter"></i>
        </a>
      </li> */}
      {listItems.map(item=>{
       return <li className="list-inline-item" key={item.key}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          <i className="iconify" data-icon={item.icon}></i>
        </a>
      </li>
      })}
    </ul>
  );
}

export default ProfileLinks;
