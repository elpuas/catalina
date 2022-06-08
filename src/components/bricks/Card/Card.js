import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Heading from "../Heading/Heading";
import Author from "../Author/Author";
import * as styles from "./Card.module.css";
import Category from "../Category/Category";
import Image from "../Image/Image";

/**
 * The Card Brick component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {Object} props               The props object.
 * @param {string} props.title         The title of the card.
 * @param {Object} props.featureImage  The image of the card.
 * @param {string} props.articleAuthor The author of the article.
 * @param {string} props.slug          The slug of the article.
 * @param {array} props.categories     The categories of the article.
 * @returns {Element}                  The Card Brick component.
 */
export default function Card(props) {
  const { title, articleAuthor, slug, image, categories } = props;

  return (
    <div className={styles.card}>
      <Link to={`/blog/${slug}`}>
        <div className={styles.cardContent}>
          <Heading className={styles.heading} level="3">
            {title}
          </Heading>
          <Author author={articleAuthor} />
        </div>
        <div className={styles.cardImage}>
          <Image image={image} alt={`card-${slug}`} />
        </div>
      </Link>
      <Category categories={categories} />
    </div>
  );
}

Card.defaultProps = {
  title: "Card Title",
  articleAuthor: "ElPuas",
  slug: "/",
  image: {},
  categories: [{ slug: "/", title: "code" }],
};

Card.propTypes = {
  title: PropTypes.string,
  articleAuthor: PropTypes.string,
  slug: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
