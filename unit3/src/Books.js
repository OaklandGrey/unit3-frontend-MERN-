import React, { Component } from 'react'
import OurBook from './OurBook'

export default class Books extends Component {
    constructor(props) {
        super(props)
        this.state={
            ourBookList: []
        }
        this.afterMongoRequest = this.afterMongoRequest.bind(this)
    }
    afterMongoRequest(res) {
        this.setState({
            ourBookList: res
        }) 
    }
    render() {
        let url = 'https://unit3lab-booklist.herokuapp.com/api/books/'
        
        fetch(url)
            .then(res => res.json())
            .then(res => {
                let booklist = []
                for(let i = 0; i < res.length; i++){
                    booklist.push(res[i])
                }
            this.afterMongoRequest(booklist)

            })
            .catch(err => console.log(err));

            const listOfOurBooks = this.state.ourBookList.map(el => {
                return <OurBook book={el} />
            })
        return (
            <div>
                <h1>Our Books</h1>
                {listOfOurBooks}
            </div>
        )
    }
}
