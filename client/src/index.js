import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_detail';
// import App from "./App";

// // const API_KEY = 'AIzaSyA9ElpHPFtemSxV2AE0fxy2iBNCAY3sMUA';
// const API_KEY = 'AIzaSyBPa7iOQE7dj_pNj7uVIVNWRI-rk5BJT_Y';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       videos: [],
//       selectedVideo: null
//     };

//     this.videoSearch('');

//   }

//   videoSearch(term) {
//     YTSearch({key: API_KEY, term: term }, (videos) => {
//       this.setState({
//         videos: videos,
//         selectedVideo: videos[0]
//       });
//     });
//   }

//   render() {
//     const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 400);

//     return (
//       <div>
//       <SearchBar onSearchTermChange={videoSearch} />
//       <br />
//       <h3>Video Details:</h3>
//       <VideoDetail video={this.state.selectedVideo}/>
//       <br />
//       <h3>Video List</h3>
//       <VideoList
//       onVideoSelect={selectedVideo => this.setState({selectedVideo})}
//       videos={this.state.videos} />
//     </div>
//     );
//   }
// }


// ReactDOM.render(<App />, document.getElementById('root'));