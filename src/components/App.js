import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';
import "../styles.scss"
export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://avatars1.githubusercontent.com/u/31857287?s=400&u=51264d74edc14cd008d927e186629bd34e0703ca&v=4',
        name: 'Lucas Viga',
        status: 'há 3 min',
        msg: 'Lorem ipsummagnam eveniet voluptate mollitia, rem sit exagnam eveniet voluptate mollitia, rem sit explicabLorem ipsummagnam eveniet voluptate mollitia, rem sit explicab',
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
        <Header />

        <div className="post-box">
          {posts.map(post => (<Post key={post.id} data={post} />))}
        </div>
      </div>
    );
  }
}
