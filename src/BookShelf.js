import React ,{Component, useDebugValue}from "react"
import Books from "./Books"
class BookShelf extends Component{
  
  
    render(){
        const booksOnShelf = this.props.books.filter((book)=>{
            return book.shelf === this.props.key1
        })
    
        
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {booksOnShelf.map((book)=>(
                      <Books book = {book} onChangeShelf={this.props.onChangeShelf} key = {book.id}/>
                  ))}
              </ol>  
            </div>
            </div>  
        )
    }
    
}
export default BookShelf;