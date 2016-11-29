import React from 'react'


export default class Footer extends React.Component {
	render() {
        const style = require('./Footer.scss');
		return (
			<footer className={style.footer}>
			    Copyright © DumDumGenius 2016
			</footer>
		)
	}
}
