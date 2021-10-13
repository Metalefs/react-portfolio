
function SourcedRSSComponent(props: any) {
  return (
    <div className="items">
      <div className="item">
        <h3 className="title">
          <a href="{url}" target="_blank">
            {props?.feed?.title}
          </a>
        </h3>
        <div>
          <p>{props?.feed?.shortBodyPlain}</p>
          <a className="more-link" href="{url}" target="_blank">
            <i className="fas fa-external-link-alt"></i>Leia mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default SourcedRSSComponent;
