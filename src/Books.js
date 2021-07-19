import React, {Component} from "react"
import BooksApp from "./App"
import * as BooksAPI from './BooksAPI'
class Books extends Component{
  state={ 
    book : this.props.book
    
  }
  onChangeSearchShelf = this.props.onChangeSearchBook
  book = this.props.book
  
    handleChange=(e)=>{
     
      this.props.onChangeShelf(this.book,e.target.value)
     this.setState({book :this.props.book})
      console.log(this.props.book)
     
    }
    render(){
    let  url = ""
    try{
      url = this.props.book.imageLinks.thumbnail? this.props.book.imageLinks.thumbnail : this.props.book.imageLinks.smallThumbnail}
    catch{
      url=""
    }
      // console.log(this.props.book);
        return(
            <li key = {this.props.book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
                <div className="book-shelf-changer">
                  <select value = {this.state.book.shelf?this.state.book.shelf:'none'} onChange={this.handleChange} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead" >Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
          </li>
        )
    }
}
export default Books;