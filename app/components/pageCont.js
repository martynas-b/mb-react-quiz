import globalStyles from "../css/global.css";
import React from 'react';

class PageCont extends React.Component {

	render () {
		return (
			<div className={globalStyles.content}>
				{this.props.children}
			</div>
		);
	}
}

export default PageCont;