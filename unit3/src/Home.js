import React, { Component } from 'react'
import SearchField from "react-search-field";
import axios from "axios";
import ShowEachBook from './ShowEachBook'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            searchText: null,
            searchResponse: []
        }
        this.onChange=this.onChange.bind(this)
        this.onEnter=this.onEnter.bind(this)
        this.afterSearch = this.afterSearch.bind(this)
    }
    onChange(value, evt) {
        this.setState({
            searchText: value
        })
    }
    afterSearch(res) {
        this.setState({
            searchResponse: res
        }) 
    }

    onEnter(value, evt) {
        
        const APIkey = '&key=AIzaSyDlLQvTxUGYnqHAfApV_W4iXcif3xYDdSg'
        const GoogleURL = "https://www.googleapis.com/books/v1/volumes?q=+intitle:";
        const url = `${GoogleURL}${this.state.searchText}${APIkey}`;
       
        fetch(url)
        .then(res => res.json())
        // .then(res => {
        //    this.afterSearch(res.items)
        // })
        .then(response => {
            let resArray = []
            for(let i = 0; i < 10; i++){
                resArray.push(response.items[i])
            }
            this.afterSearch(resArray)

        })
        .catch(err => {
          console.error(err);
        });
    }

    

    
    render() {
        console.log(this.state.searchResponse)
       const abc = this.state.searchResponse.map(el => {
            return <ShowEachBook bookInfo={el} />
        })

        return (
            <div>
                <h1>hello homepage</h1>
                <SearchField 
                placeholder="Search"
                onChange={(value, evt) => this.onChange(value, evt)}
                onEnter={(value, evt) => this.onEnter(value, evt)}
                />
                {abc}
            </div>
        )
    }
}
