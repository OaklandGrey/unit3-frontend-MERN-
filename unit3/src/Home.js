import React, { Component } from 'react'
import SearchField from "react-search-field";


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(value, evt) {
        this.setState({
            searchText: value
        })
    }
    render() {
        return (
            <div>
                <h1>hello homepage</h1>
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                />
                
            </div>
        )
    }
}
