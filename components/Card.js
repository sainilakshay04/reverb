import React, { Component } from 'react';

const styles = {
	card: {
		margin: '10px',
		display: 'inline-block',
		width: '500px',
		maxHeight: '650px',
		boxShadow: '3px 15px 30px 1px grey',
	},
	cardImg: {
		width: '500px',
		height: '360px',
	},
	artistName: {
		fontWeight: '600',
	},
	recordLabel: {
		fontSize: '12px',
		color: 'grey',
	},
	cardTitle: {
		fontWeight: '700',
	},
	icons: {
		width: '20px',
		height: '20px',
	},
	commentLikes: {
		fontWeight: 'lighter',
		fontSize: '12px',
		color: 'grey',
		display: 'inline-block',
		marginLeft: '4px'
	},
	cardInfoContainer: {
		paddingBottom: '20px'
	}
}

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.likes,
			comments: this.props.comments,
			isLiked: false,
			likeIcon: '/img/heart_inactive.png'
		};
	}

	updateLike() {
		const { isLiked, likes, likeIcon } = this.state;
		if (isLiked) {
			this.setState({
				likes: likes - 1,
				isLiked: !isLiked,
				likeIcon: 'img/heart_inactive.png'
			});
		} else {
			this.setState({
				likes: likes + 1,
				isLiked: !isLiked,
				likeIcon: 'img/heart_active.png'
			});
		}
	}

	render() {
		const { likes, likeIcon } = this.state;
		const {
			title,
			description,
			artistThumb,
			artistName,
			recordLabel,
			comments,
			art
		} = this.props;
		return (
			<div className="card" style={styles.card}>
				<img className="card-img" style={styles.cardImg} src={art} alt="album art"/>
				<div className="card-block">
					<h4 className="card-title" style={styles.cardTitle}>{title}</h4>
					<p className="card-text">{description}</p>

				</div>
				<div className="container" style={styles.cardInfoContainer}>
					<div className="row">
						<div className="col-sm-6">
							<div className="row">
								<div className="col-sm-3">
									<img src={artistThumb} className = "img-circle" height="50" width="50" />
								</div>
								<div className="col-sm-9">
									<div className="col" id="21" height="50%">
										<div className="artist-name" style={styles.artistName}>{artistName}</div>
									</div>
									<div className="col" id="22" height="50%">
										<div className="record-label" style={styles.recordLabel}>{recordLabel}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="col-sm-5">
								<img src={likeIcon} className="icons" style={styles.icons} onClick={() => this.updateLike()} />
								<div className="commentLikes" style={styles.commentLikes}>{likes}</div>
							</div>
							<div className="col-sm-1 separator">|</div>
							<div className="col-sm-5" >
								<img src="img/comments.png" className="icons" style={styles.icons} />
								<div className="commentLikes" style={styles.commentLikes}>{comments}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
