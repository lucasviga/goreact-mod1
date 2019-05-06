import React, { Component } from 'react';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://avatars1.githubusercontent.com/u/31857287?s=400&u=51264d74edc14cd008d927e186629bd34e0703ca&v=4',
        name: 'Lucas Viga',
        status: 'há 3 min',
        msg: 'Lorem ipsummagnam eveniet voluptate mollitia, rem sit explicab',
      },
      {
        id: 2,
        avatar:
          'https://avatars1.githubusercontent.com/u/31857287?s=400&u=51264d74edc14cd008d927e186629bd34e0703ca&v=4',
        name: 'Viga',
        status: 'há 10 min',
        msg: 'Lorem voluptate mollitia, rem sit explicab',
      },
      {
        id: 3,
        avatar:
          'https://avatars1.githubusercontent.com/u/31857287?s=400&u=51264d74edc14cd008d927e186629bd34e0703ca&v=4',
        name: 'LCS01',
        status: 'há 15 min',
        msg: 'Lorem voluptate mollitia, rem sit explicab',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <div>
          <h1>Rocketbook</h1>
        </div>

        {posts.map(post => (
          <div key={post.id}>
            <div>
              <img src={post.avatar} alt={post.name} />
              <h2>{post.name}</h2>
              <span>{post.status}</span>
            </div>

            <div>
              <p>{post.msg}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
