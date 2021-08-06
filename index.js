const express = require("express");
//database
const database =require("./database");

// intilize express

const booky= express();


//route         /
//description  get all the books
//access       public
// parameter   none
//metods       get

booky.get("/",(req,res)=>{
  return  res.json({books:database.books});
});


//route         /is
//description  get specific book on isbn
//access       public
// parameter   isbn
//metods       get

booky.get("/is/:isbn",(req,res)=>{
  const getSpecificBook = database.books.filter(
    (book)=> book.Isbn===req.params.isbn
  );

  if (getSpecificBook.length===0){
    return res.json({error:`no book found for the isbn of ${req.params.isbn}`})
  }
  return res.json({book:getSpecificBook})
});


//route         /c
//description  get specific book on isbn on catagiry
//access       public
// parameter   catagiry
//metods       get

booky.get("/c/:catagiry",(req,res) =>{
  const getSpecificBook = database.books.filter(
    (book)=>book.catagiry.includes(req.params.catagiry)
  );

  if (getSpecificBook.length===0){
    return res.json({error:`no book found ${req.params.catagiry}`})
  }
  return res.json({book:getSpecificBook});
});



//route         /lang
//description  get specific book on lang
//access       public
// parameter   language
//metods       get

booky.get("/lang/:lan",(req,res)=>{
  const getSpecificLang = database.books.filter(
    (book)=> book.language.includes(req.params.lan)
  );
  if (getSpecificLang.length===0){
    return res.json({error:`no book found of ${req.params.lan} language `})
  }
  return res.json({book:getSpecificLang});
});


//route         /author
//description  get all authors
//access       public
// parameter   none
//metods       get
booky.get("/author",(req,res)=>{
  return res.json({authors:database.author})
});



//route         /authorname
//description  get specific book based on author name
//access       public
// parameter   name
//metods       get

booky.get("/authorname/:Name",(req,res)=>{
  const authorName =database.author.filter(
    (author)=> author.name.includes(req.params.Name)
  );
  if (authorName.length===0){
    return res.json({error:`no author found called ${req.params.Name}`});
  }
  return res.json({author:authorName});
});



//route         /author/book
//description  get specific author by book name
//access       public
// parameter   books
//metods       get


booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  );

  if(getSpecificAuthor.length === 0){
    return res.json({
      error: `No author found for the book of ${req.params.isbn}`
    });
  }
  return res.json({authors: getSpecificAuthor});
});










//route         /publications
//description  get specific
//access       public
// parameter   none
//metods       get

booky.get("/publications",(req,res)=>{
  return res.json({publications:database.publication})
});



booky.listen(3000,() => {
  console.log("server is running");
});



//route         /publications/pubname
//description  get specific publication books
//access       public
// parameter   pubname
//metods       get
booky.get("/publications/pubname/:pubName",(req,res)=>{
  const publicationName = database.publication.filter(
    (publication)=>publication.pubname.includes(req.params.pubName)
  );
  if (publicationName.length===0){
    return res.json({eroor:`no publication found called ${req.params.pubName}`})
  };
  return res.json({publication:publicationName});
});





//route         /publications/book
//description  get specific all publications of the book
//access       public
// parameter   books
//metods       get

booky.get("/publications/book/:bookName",(req,res)=>{
  const publicationByBook = database.publication.filter(
    (publication) => publication.books.includes(req.params.bookName)
  );
  if(publicationByBook.length===0){
    return res.json({error:`no publication for this ${req.params.bookName} book`})
  };
  return res.json({publication:publicationByBook})
});
