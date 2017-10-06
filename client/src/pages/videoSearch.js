import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/VideoSearch/search_bar';
import VideoList from '../components/VideoSearch/video_list';
import VideoDetail from '../components/VideoSearch/video_detail';

const API_KEY = 'AIzaSyBPa7iOQE7dj_pNj7uVIVNWRI-rk5BJT_Y';

class VideoSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400);

    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <br />
      <h3>Video Details:</h3>
      <VideoDetail video={this.state.selectedVideo}/>
      <br />
      <h3>Video List</h3>
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
    </div>
    );
  }
}


// ReactDOM.render(<App />, document.getElementById('root'));
export default VideoSearch;