import React, { Component } from 'react';

import Card from './Card';

const cards = [{
  title: "WISH YOU WERE HERE",
  description: "Two years after the band released their most iconic- Dark side of the moon album. this album came in to maintain the legacy of a rather generation-defining sound. The multi-part track 'Shine on you crazy diamond' is a tribute to Syd Barrett. This album appears on Rolling Stone's lists of 'The 500 Greatest Albums of All Time' and the '50 Greatest Prog Rock Albums of All Time'. ",
  artistThumb: 'img/floydThmb.jpg',
  artistName: 'Pink Floyd',
  recordLabel: 'Harvest Records- UK',
  likes: 904,
  comments: 98,
  art: 'img/floydwywh.jpg'
}, {
  title: "NEVERMIND",
  description: "Nevermind was in part responsible for bringing both alternative rock and grunge to a large, mainstream audience, and has been ranked highly on lists of the greatest albums of all time by publications such as Rolling Stone and Time Magazines. Despite low commercial expectations by the band and its record label, Nevermind became a surprise success in late 1991.",
  artistThumb: 'img/nirvanaThmb.jpg',
  artistName: 'Nirvana',
  recordLabel: 'DGC Records',
  likes: 895,
  comments: 96,
  art: 'img/nirvanaNvm.jpg'
},{
  title: "ZIGGY STARDUST",
  description: "Bowie's revolutionary mix of hard rock and glam pop was given an otherwordly look and feel by his coquettish alter ego Ziggy. It's not so much that every act that followed dyed their hair orange in homage to the spidery spaceman; more that they learned the value of creating a 'bubble' of image and presentation that fans could fall in love with.",
  artistThumb: 'img/bowieThmb.jpg',
  artistName: 'David Bowie',
  recordLabel: 'Trident Studios, London',
  likes: 645,
  comments: 68,
  art: 'img/bowieTrafozgatsfm.jpg'
},{
  title: "ARE YOU EXPERIENCED",
  description: "Looking and playing like a brother from another planet, Hendrix delivered the most dramatic debut in pop history. Marrying blues and psychedelia, dexterity and feedback trickery, it redefined the guitar's sonic possibilities, while beyond the fretboard pyrotechnics burnt a fierce artistic vision. Jimi Hendrix changed the world forever.",
  artistThumb: 'img/hendrixThmb.jpg',
  artistName: 'Jimi Hendrix',
  recordLabel: 'Olympic, London',
  likes: 900,
  comments: 98,
  art: 'img/hendrixAye.jpg'
}

]

export default class CardList extends Component {
  render() {
    return (
      <div>
        {
          cards.map(card =>
            <Card
              art={card.art}
              title={card.title}
              description={card.description}
              artistThumb={card.artistThumb}
              artistName={card.artistName}
              recordLabel={card.recordLabel}
              likes={card.likes}
              comments={card.comments}
            />
          )
        }
      </div>
    );
  }
}
