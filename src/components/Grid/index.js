import React from 'react';
import Proptypes from 'prop-types';
//Styles 
import { Wrapper, Content} from './Grid.styles';

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.prototype = {
    header: Proptypes.string,
};

export default Grid;