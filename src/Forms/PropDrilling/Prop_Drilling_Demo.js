/* import React from 'react'

import {bookinfo} from '../bookinfo';
import { useState } from 'react';
export const Prop_Drilling_Demo = () => {
    var [books,setBooks]=useState(bookinfo);
    var removeBook=(author)=>{
        var balancebooks=books.filter((book)=>{
            return book.author!==author
        })
        setBooks(balancebooks);
    }
  return (
    <div>
      <List books={books}> removeBook={removeBook}</List>
    </div>
  )
}
const List=({books,removeBook})=>{
    return (<div>
        {books.map((book)=>{
            return(<div>
                <SingleBook book={book} removeBook={removeBook}></SingleBook>
            </div>)
        })}
    </div>)
}

const SingleBook=({book,removeBook})=>{
    return(<div>
        <h3>{book.author}---{book.title}</h3>
        <img src={book.imgpath} alt="not found" wauthorth="150px" height="150px"></img>
        <h3>{book.author}</h3>
        <button onClick={()=>{removeBook(book.author)}}>Remove Book</button>
    </div>)
}
export default Prop_Drilling_Demo */
import React, { useState } from 'react';
import { bookinfo } from '../bookinfo';

export const Prop_Drilling_Demo = () => {
  const [books, setBooks] = useState(bookinfo);

  const removeBook = (author) => {
    const updatedBooks = books.filter((book) => book.author !== author);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <List books={books} removeBook={removeBook} />
    </div>
  );
};

const List = ({ books, removeBook }) => {
  return (
    <div>
      {books.map((book) => (
        <SingleBook
          key={book.author} // Add a key to remove React warnings
          book={book}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
};

const SingleBook = ({ book, removeBook }) => {
  return (
    <div>
      <h3>
        {book.author} --- {book.title}
      </h3>
      <img
        src={book.imgpath}
        alt="not found"
        width="150px"
        height="150px"
      />
      <h3>{book.author}</h3>
      <button onClick={() => removeBook(book.author)}>Remove Book</button>
    </div>
  );
};

export default Prop_Drilling_Demo;
