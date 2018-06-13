

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/posts'

import './News.css';
import Post from '../components/Post'


class News extends Component {


  render() {
    const { posts } = this.props
    return (
      posts.map(post => {
        return (
          <div
            className="posts-container"
            key={post['post-time']}
          >
            <Post
              post={post}
            />
          </div>
        )
      })
    )
  }
}

const mapDispatch = fetchPosts

const mapState = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapState,  mapDispatch)(News)

