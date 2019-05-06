import React from 'react';
import "../styles.scss"

const Post = props => (
  <div className="post" key={props.data.id}>
    <div className="post-header">
      <img className="avatar" src={props.data.avatar} alt={props.data.name} />
      <div className="post-header__content">
        <h2>{props.data.name}</h2>
        <span>{props.data.status}</span>
      </div>
    </div>

    <div className="post-body">
      <p>{props.data.msg}</p>
    </div>
  </div>
);

export default Post;
