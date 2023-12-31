import React from "react";
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';

//styles
import { Image } from './Thumb.styles'

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
        ): (
            <Image src={image} alt='movie-thumb'/>
        )}
    </div>
);

Thumb.propTypes = {
    image: Proptypes.string,
    movieId: Proptypes.number,
    clickable: Proptypes.bool
};

export default Thumb;