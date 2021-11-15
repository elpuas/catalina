/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./BlockVideo.module.css";
import Callout from "../Callout/Callout";
import Video from "../../bricks/Video/Video";

/**
 * The BlockVideo component.
 *
 * @author Alfredo Navas <elpuas@gmail.com>
 * @param {object} props - Component props.
 * @param {object} props.callout - The video URL.
 * @param {object} props.callout.heading - The video heading.
 * @param {object} props.callout.content - The video content.
 * @param {object} props.callout.link - The video link.
 * @param {object} props.thumbnail - The video image thumbnail.
 * @param {string} props.videoUrl - The video URL.
 * @return {Element} - The BlockVideo component.
 */
export default function BlockVideo(props) {
  const { callout, thumbnail, videoUrl } = props;

  return (
    <div className={styles.blockVideo}>
      <Callout
        heading={callout[0].heading}
        content={callout[0].content}
        link={callout[0].link}
      />
      <Video videoUrl={videoUrl}>
        <GatsbyImage image={thumbnail.gatsbyImageData} alt="Video" />
      </Video>
    </div>
  );
}

BlockVideo.propTypes = {
  callout: PropTypes.array,
  thumbnail: PropTypes.shape({
    gatsbyImageData: PropTypes.object,
  }),
  videoUrl: PropTypes.string,
};
