import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from"./BookShelf"
import Search from './Search.js'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  shelfs =[{key: 'currentlyReading',name:'Currently Read'},
    {key:'wantToRead',name:'Want To Read'},
    {key:'read',name:'Read'}]
  state = {
   
       /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  };
 
  async componentDidMount(){
    const books = await BooksAPI.getAll();
    this.setState({books});
    console.log(books);
  };
  
  closeSearch = ()=>this.setState({ showSearchPage: false });
  shelfChanged =(book,newShelf)=>{
    console.log("haha")
   BooksAPI.update(book,newShelf);
    book.shelf = newShelf;
    const books = this.state.books.filter((b)=>b.id!==book.id).concat(book);
    this.setState({books})
  }
  

  render() {
    
    return (
      <div className="app">
        <Route exact path ='/search' render = { ()=>{
          return(<Search onClosed =  {this.closeSearch} books= {this.state.books} onChangeShelf = {this.shelfChanged}/>)
        }} ></Route>
        
        <Route exact path = '/' render ={()=>{  return (<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
               {this.shelfs.map((shelf)=>(
                 <BookShelf key1={shelf.key} name ={shelf.name} books ={this.state.books} onChangeShelf={this.shelfChanged} />
               ))}
               
              
            </div>
            <div className="open-search">
              <Link  to= "/search"> <button onClick={() => this.setState({ showSearchPage: true })}> toAdd a book </button> </Link>
            </div>
          </div>
              </div>)}} ></Route>
       
        
        
    
               </div>)
    
  }}


export default BooksApp;
