import React, { Component } from 'react'
import SearchField from "react-search-field";
import axios from "axios"


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null
        }
        this.onChange=this.onChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
    }
    onChange(value, evt) {
        this.setState({
            searchText: value
        })
    }

    onEnter(value, evt) {

        const GoogleURL = "https://www.googleapis.com/books/v1/volumes?q=+intitle:";
        const url = `${GoogleURL}${this.state.searchText}.json`;
       
        axios
        .get(url)
        .then(response => {
          console.log(response)
          console.log(response.request.response)

        })
        .catch(err => {
          console.error(err);
        });
    
    }

    

    
    render() {
        return (
            <div>
                <h1>hello homepage</h1>
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                
            </div>
        )
    }
}
