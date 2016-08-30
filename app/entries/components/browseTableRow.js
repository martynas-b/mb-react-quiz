import browseStyles from "../css/browse.css";

import React from 'react';

import BrowseItem from './browseItem.js';

var BrowseTableRow = React.createClass ({
	
	render: function () {
		var cells = [];
		this.props.items.forEach(function(item, inx) {
			cells.push(
				<td key={item.id + "|cell"} className={browseStyles.itemCell}>
					<BrowseItem key={item.id + "|item"} item={item} />
				</td>
			);
		});
		
		return (
			<tr>
				{cells}
			</tr>
		);
	}
});

module.exports = BrowseTableRow;