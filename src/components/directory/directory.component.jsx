import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: "/images/hats.png",
          id: 1,
          linkURL:'hats'
        },
        {
          title: 'jackets',
          imageUrl: "/images/jackets.png",
          id: 2,
          linkURL:''
        },
        {
          title: 'sneakers',
          imageUrl: "/images/sneakers.png",
          id: 3,
          linkURL:''
        },
        {
          title: 'womens',
          imageUrl: "/images/womens.png",
          size: 'large',
          id: 4,
          linkURL:''
        },
        {
          title: 'mens',
          imageUrl: "/images/men.png",
          size: 'large',
          id: 5,
          linkURL:''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSections }) => (
          <MenuItem key={id} {...otherSections} />
        ))}
      </div>
    );
  }
}

export default Directory;
