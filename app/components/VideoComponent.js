import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ScrollArea from 'react-scrollbar';
import ajaxHelpers from '../utils/ajaxHelpers'
import Video from './Video'

const Videos = React.createClass({
  render: function(){

    let video = this.props.ajaxReturn.map((obj) => {
      let url = "https://www.youtube.com/embed/" + obj.videoId;

        return (
          <Video
            url = {url}
            videoId={obj.videoId}
            title = {obj.title}
          />
        )
      })

    return (
      <div>
        <ScrollArea
          smoothScrolling={true}
          minScrollSize={40}
          >
          {video}
        </ScrollArea>
      </div>
    )
  }
})

export default Videos;
