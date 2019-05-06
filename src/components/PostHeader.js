import React from 'react';

const PostHeader = props => (
  <div className="post-header">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <div className="post-header__content">
      <h2>{props.name}</h2>
      <span>{props.status}</span>
    </div>
  </div>
);

export default PostHeader;
