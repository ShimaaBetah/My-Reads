import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Books from './Books.js'
class Search extends Component {
    state = {
        booksToView :[]
    }
    search = async (query)=>{
const foundBooks = await BooksAPI.search(query)
     // console.log(foundBooks)
      let booksWithShelfs =  foundBooks && !foundBooks.error ? foundBooks.map(foundBook => {
          if (this.props.books.some(book=> book.id === foundBook.id)){
              foundBook.shelf = this.props.books.find(book=> book.id === foundBook.id).shelf
          }
          return foundBook
          
      }) : []

      this.setState({booksToView : booksWithShelfs})
      console.log(this.state.booksToView)
      
    }
    
   
    
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={this.props.onClosed}>Close</button>
              <div className="search-books-input-wrapper">
              
                <input onChange = {(event)=>this.search(event.target.value)} type="text" placeholder="Search by title or author"/>
                 
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {
                    this.state.booksToView.map(book =>(
                        <Books book = {book} onChangeShelf ={this.props.onChangeShelf} key = {book.id} />
                    ))
                  }
              </ol>
            </div>
          </div>
        )
    }
}
export default Search;