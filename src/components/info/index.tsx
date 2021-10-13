function Info() {
  return (
    <aside className="info aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading sr-only">Informação básica</h2>
        <div className="content">
          <ul className="list-unstyled">
            <li>
              <span className="iconify mr-2" data-icon="carbon:map"></span>
              <span className="sr-only">Localização:</span>Lagoa Santa, MG -
              Brasil
            </li>
            <li>
              <span className="iconify mr-2" data-icon="carbon:email-new"></span>
              <span className="sr-only">Email:</span>
              <a href=".">jacksonpires@devportable.com</a>
            </li>
            <li>
              <span
                className="iconify mr-2"
                data-icon="akar-icons:link-chain"
              ></span>
              <span className="sr-only">Website:</span>
              <a
                href="https://github.com/Metalefs/"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Metalefs/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Info;
