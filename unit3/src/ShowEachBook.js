import React, { Component } from 'react'

const bookStyles = {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    width: "350px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
}

export default class ShowEachBook extends Component {
    constructor(props) {
        super(props)
        this.addBook = this.addBook.bind(this)
    }
    addBook(info) {
        const url = 'https://unit3lab-booklist.herokuapp.com/api/books/'
        fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
          })
            .catch(err => console.log(err));
    }
    render() {
        const book = this.props.bookInfo
        return (
            <div style={bookStyles} onClick={() => this.addBook(book)}>
                {book.volumeInfo.title}
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <p style={ {textAlign:"center"} }>{book.searchInfo.textSnippet}</p>
            </div>
        )
    }
}
