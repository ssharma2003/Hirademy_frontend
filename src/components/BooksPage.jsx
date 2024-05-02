import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const BooksPage = () => {

  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    try {
      const res = await fetch("https://softwium.com/api/books")
      const data = await res.json()
      setBooks(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchBooks()
  },[])


  return(
    <div  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <table style={{ borderCollapse:"collapse", marginLeft:'auto', marginRight:'auto'}}>
      <thead >
        <tr >
          <th style={{border:'2px solid black',textAlign:'center', padding:'4px'}}>Index</th>
          <th style={{border:'2px solid black',textAlign:'center',padding:'4px'}}>Title</th>
        </tr>
        </thead>
        <tbody >
          {books.map((books, index) => {
            return(
              <tr key={index}>
                <td style={{border:'2px solid black', textAlign:'center',padding:'4px'}}>{index + 1}</td>
                <td style={{border:'2px solid black',textAlign:'center',padding:'4px'}}><Link to={`/book/${books.id}`}>{books.title}</Link></td>
              </tr>
            )
          })}
        </tbody>
      
    </table>
    </div>
    
  )
}

export default BooksPage;