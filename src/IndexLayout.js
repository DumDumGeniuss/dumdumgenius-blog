import React from 'react'

export default class IndexLayout extends React.Component {
	render() {
		return (
            <html>
                <head>
                    <title>Hello World</title>
                </head>
                <body>
                    <div id="reactContainer" />
                    <div id="reactHelloContainer"
                        dangerouslySetInnerHTML={ {__html: this.props.content} } />
                </body>
                <script src="main.min.js"></script>
            </html>
		)
	}
}