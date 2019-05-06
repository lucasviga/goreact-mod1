import React from 'react';
import '../styles.scss';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post" key={props.data.id}>
    <PostHeader avatar={props.data.avatar} name={props.data.name} status={props.data.status} />
    <div className="post-body">
      <p>{props.data.msg}</p>
    </div>
  </div>
);

export default Post;
