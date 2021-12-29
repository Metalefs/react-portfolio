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
            <span
              className="iconify mr-2"
              data-icon="fa-solid:external-link-alt"
            ></span>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SourcedRSSComponent;
