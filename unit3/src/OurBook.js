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

export default class OurBook extends Component {
    render() {
        let book = this.props.book
        return (
            <div style={bookStyles}>
                <h4>{book.volumeInfo.title}</h4>
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <p style={ {textAlign:"center"} }>{book.searchInfo.textSnippet}</p>
                
            </div>
        )
    }
}
