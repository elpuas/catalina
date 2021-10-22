import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Paragraph.module.css';
/**
 * The paragraph component
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props         The prop object.
 * @param {string} props.content The content string.
 * @return {Element}             Renders the paragraph component.
 */
export default function Paragraph({ content }) {
  return (
    // eslint-disable-next-line react/no-danger
    <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: content }} />
  );
}

Paragraph.propTypes = {
  content: PropTypes.string,
};

Paragraph.defaultProps = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla dolor luctus ipsum ultrices volutpat. Sed blandit mauris mi, a dictum odio sodales eu. Aliquam ut vestibulum augue. Mauris bibendum fermentum sodales. Fusce rhoncus non ligula id maximus. Sed dui turpis, varius et velit id, iaculis tempor urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in odio in urna lobortis maximus porta a ex. Vestibulum turpis tellus, finibus at nunc ac, dapibus viverra nibh. Phasellus dictum nisi ligula, et molestie orci consequat in. Curabitur mattis ac turpis et mollis. Integer lectus sapien, porta nec eleifend id, vehicula sed erat.'
};
