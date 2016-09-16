import itemStyles from './item.css';

import React, { Component, PropTypes } from 'react';

class ItemDescr extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {

        const {description, creators} = this.props;

        return (
            <div className={itemStyles.textWrapper}>
                {description}
                <div style={{marginTop: 20}}><span className={itemStyles.header3}>Creator: </span>{creators}</div>
            </div>
        );
    }
}

ItemDescr.propTypes = {
    description: PropTypes.string,
    creators: PropTypes.string
};

export default ItemDescr;
