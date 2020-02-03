import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menuitem/menuitem-component';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.villagehatshop.com%2Fphotos%2Fproduct%2Fstandard%2F4511390S485352%2Fall%2Fmesser-wool-felt-fedora-hat.jpg&imgrefurl=https%3A%2F%2Fwww.villagehatshop.com%2Fhats%2FLeather-Fedora&tbnid=RDhZEgf74F77jM&vet=12ahUKEwi0mcWG2rTnAhVy2jgGHbfmCtUQMygAegUIARCkAg..i&docid=SFbGpRb4UrjLsM&w=450&h=450&q=hats&ved=2ahUKEwi0mcWG2rTnAhVy2jgGHbfmCtUQMygAegUIARCkAg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map((section) => <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} />)}
            </div>);
    }
}

export default Directory;