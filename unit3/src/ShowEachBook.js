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
    render() {
        const book = this.props.bookInfo
        return (
            <div style={bookStyles}>
                {book.volumeInfo.title}
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <p style={ {textAlign:"center"} }>{book.searchInfo.textSnippet}</p>
            </div>
        )
    }
}
