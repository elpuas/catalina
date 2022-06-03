import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BlockSelectedArticlesHero.module.css';
import Card from '../../bricks/Card/Card';
import Callout from '../Callout/Callout';

/**
 * The BlockSelectedArticlesHero component is used to display a callout with 2 selected posts.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props         The props object.
 * @param {array} props.articles The articles to display.
 * @param {array} props.callout  The callout to display.
 * @returns {Element}            The BlockSelectedArticlesHero component.
 */
export default function BlockSelectedArticlesHero(props) {
  const { callout, articles } = props;
  return (
    <div className={styles.articles}>
      <div className={styles.articlesContent}>
        { articles && articles.map((article, index) => (
          <Card
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={article.title}
            author={article.articleAuthor}
            image={article.featuredImage}
            categories={article.categories}
            slug={article.slug}
          />
        ))}
      </div>
      <div className={styles.callout}>
        <Callout
          heading={callout[0].heading}
          content={callout[0].content}
          link={callout[0].link}
        />
      </div>
    </div>
  );
}

BlockSelectedArticlesHero.defaultProps = {
  callout: [],
  articles: [],
};

BlockSelectedArticlesHero.propTypes = {
  callout: PropTypes.arrayOf(PropTypes.object),
  articles: PropTypes.arrayOf(PropTypes.object),
};
