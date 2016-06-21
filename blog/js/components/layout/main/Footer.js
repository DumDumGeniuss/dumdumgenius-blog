import React from 'react';

export default class Footer extends React.Component {
	render() {
        const styles = {
            footer: {
                width: "100%",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
                lineHeight: "50px",
                fontSize: "1em"
            }
        };
		return (
			<footer style={styles.footer}>
			    Copyright © DumDumGenius 2016
			</footer>
		);
	}
}
