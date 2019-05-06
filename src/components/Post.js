import React from 'react';

const Post = props => (
  <div key={props.data.id}>
    <div>
      <img src={props.data.avatar} alt={props.data.name} />
      <h2>{props.data.name}</h2>
      <span>{props.data.status}</span>
    </div>

    <div>
      <p>{props.data.msg}</p>
    </div>
  </div>
);

export default Post;
