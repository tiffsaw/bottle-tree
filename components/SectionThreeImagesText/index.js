import React from 'react';
import style from './style.scss';

export default class SectionThreeImagesText extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <section className={style.section}>
        <div className="row">
          <div className="small-12 columns">
            {/* <article
              className={style.content}
              dangerouslySetInnerHTML={{
                __html: content.post.content.rendered
              }}
            /> */}
            <div className={style.imagesWrap}>
              <img src={content.acf.image_1.url} alt={content.acf.image_3.alt} />
              <img src={content.acf.image_2.url} alt={content.acf.image_3.alt} />
              <img src={content.acf.image_3.url} alt={content.acf.image_3.alt} />
            </div>
            <p className={style.copy}>{content.acf.paragraph}</p>
          </div>
        </div>
      </section>
    );
  }
}
