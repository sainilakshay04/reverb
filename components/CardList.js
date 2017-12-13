import React, { Component } from 'react';

import Card from './Card';

const cards = [{
  title: "WISH YOU WERE HERE",
  description: "Two years after the band released their most iconic- Dark side of the moon album. this album came in to maintain the legacy of a rather generation-defining sound. The multi-part track 'Shine on you crazy diamond' is a tribute to Syd Barrett. This album appears on Rolling Stone's lists of 'The 500 Greatest Albums of All Time' and the '50 Greatest Prog Rock Albums of All Time'. ",
  artistThumb: 'img/floydThmb.jpg',
  artistName: 'Pink Floyd',
  recordLabel: 'Harvest Records- UK',
  likes: '904',
  comments: '68',
  art: 'img/floydwywh.jpg'
}, {
  title: "NEVERMIND",
  description: "Nevermind was in part responsible for bringing both alternative rock and grunge to a large, mainstream audience, and has been ranked highly on lists of the greatest albums of all time by publications such as Rolling Stone and Time Magazines. Despite low commercial expectations by the band and its record label, Nevermind became a surprise success in late 1991.",
  artistThumb: 'img/nirvanaThmb.jpg',
  artistName: 'Nirvana',
  recordLabel: 'DGC Records',
  likes: '645',
  comments: '86',
  art: 'img/nirvanaNvm.jpg'
}]

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
