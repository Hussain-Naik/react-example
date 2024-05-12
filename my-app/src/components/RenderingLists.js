import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'book1',
        'book2',
        'book3',
    ]

    const books = [
        {
            title: 'book1',
            author: 'author1',
            pages: 200
        },
        {
            title: 'book2',
            author: 'author2',
            pages: 100
        },
        {
            title: 'book3',
            author: 'author3',
            pages: 300
        }
    ]
    return (
        <div>
            {bookList.map(book => {
                return <h3 key={book}>{book}</h3>
            })}
            
            {books.map(book => {
                return <Book key={book.title} book={book}/>
            })}
        </div>
    )
}

export default RenderingLists
