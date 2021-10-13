import { useContext } from 'react';

import { LanguageContext } from '../../hocs/languageContext';
import TestimonialItem from './testimonialItem';

import './testimonials.scss'

function Testimonials() {
  const data = useContext(LanguageContext).data;
  return (
    <aside className="testimonials aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">{data.basic_info.section_name.recommendations}</h2>
        <div className="content">
          {data.testimonials.sources.map((testimonial,i) => <TestimonialItem key={i} testimonial={{...testimonial}}/>)}

          <p>
            <a
              className="more-link"
              href="https://www.linkedin.com/in/jackson-pires-ramalho-58a2a080/?lipi=urn%3Ali%3Apage%3Aprofile_view_index_index%3BMshv4qvWT6SUQ9jWQxm5RA%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>{data.testimonials.seeMoreLabel}
            </a>
          </p>
          
        </div>
      </div>
    </aside>
  );
}

export default Testimonials;
