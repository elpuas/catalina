import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BlockSelectedArticlesHero.module.css';
import Card from '../../bricks/Card/Card';
import Callout from '../Callout/Callout';
import Observables from '../../bricks/Observables/Observables';

export default function BlockSelectedArticlesHero(props) {
  const { callout, articles } = props;
  return (
    <Observables
      isVisibleClass="isVisible"
      customClass="observable-index"
      threshold={0.75}
    >
      <div className={styles.articles}>
        { articles && articles.map((article, index) => (
          <Card
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={article.title}
            author={article.articleAuthor}
            image={article.featuredImage}
            categories={article.categories}
          />
        ))}
        <Callout
          heading={callout[0].heading}
          content={callout[0].content}
          link={callout[0].link}
        />
      </div>
    </Observables>
  );
}
