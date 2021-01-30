import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import PropTypes from "prop-types";

import ReactStars from "react-rating-stars-component";
const MovieCard = ({ movie }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const { title, description, posteUrl, rate } = movie
    return (
        <div id="two">
            <Card>
                <CardImg top width="250px" height="250px" src={posteUrl} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{description}</CardText>
                    <ReactStars
                        count={rate}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />,
          <Button>Delete</Button>
                </CardBody>
            </Card>
        </div>
    );
};

MovieCard.protypes = {
    movie: PropTypes.object
}

export default MovieCard;