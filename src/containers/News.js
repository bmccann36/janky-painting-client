

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './News.css';
import Post from '../components/Post'


class News extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      posts.map(post => {
        return (
          <div className="posts-container">
            <Post
              post={post}
            />
          </div>
        )
      })
    )
  }
}

// const mapDispatch = { setColor }

const mapState = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapState)(News)

