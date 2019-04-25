import React from 'react';
import { Route } from 'react-router-dom'
import './index.css'
import { Button } from 'antd';



export default class Login extends React.Component<{}, any> {
    constructor(props: {}) {
        super(props)
    }
    toHome = (e: {}) => {
        // console.log(this.props.history.push)
        // this.props.history.pushState(path: '/')
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={e => this.toHome(e)} >Primary</Button>
            </div>
        )

    }
}