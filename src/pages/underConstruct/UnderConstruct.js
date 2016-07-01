import React from 'react'

if (process.env.BROWSER) {
    require('./UnderConstruct.css')
}

class UnderConstruct extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              test: null
          };
    }
    render() {
    	return (
            <div className="UnderConstruct-mainArea">
                Oops, it's not ready ！
            </div>
    	)
    }
}

export default UnderConstruct