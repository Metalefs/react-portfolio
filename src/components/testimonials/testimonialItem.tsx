export default function TestimonialItem(props: any) {
  return (
    <div className="item">
      <blockquote className="quote">
        <p>
          <i className="fas fa-quote-left"></i>
          {props.testimonial.quote}
        </p>
      </blockquote>
      <p className="source">
        <span className="name">{props.testimonial.from}</span>
        <br />
        <span className="title"></span>
      </p>
    </div>
  );
}
