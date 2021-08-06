const books = [
  {Isbn:"1234book",
   title:"tesla",
   pubdate:"2021-08-03",
   language:"en",
   numPage:200,
   author:[1,2],
   publications:[1,2],
   catagiry:["tech","space","educations"]},

   {Isbn:"newbook",
    title:"tech doc",
    pubdate:"2021-06-03",
    language:["en","spanish"],
    numPage:250,
    author:[1],
    publications:[2,3],
    catagiry:["tech","educations"]},

    {Isbn:"specialbook",
     title:"game of thrones",
     pubdate:"2021-08-15",
     language:["en","telugu"],
     numPage:1000,
     author:[3,4],
     publications:[3],
     catagiry:["naval","dramatic","war"]},


]


const author =[
  {
    id:1,
    name:"anil",
    books:["1234book","newbook"]
  },
  {
    id:2,
    name:"elon musk",
    books:["1234book"]
  },
  {
    id:3,
    name:"phani",
    books:["specialbook"]
  },
  {
    id:4,
    name:"da da da da",
    books:["specialbook"]
  }
]

const publication =[
  {
    id:1,
    pubname:"writex",
    books:["1234book"]
  },
  {
    id:2,
    pubname:"schand",
    books:["1234book","newbook"]
  },
  {
    id:3,
    pubname:"grand print",
    books:["specialbook","newbook"]
  }
]

module.exports ={books, author, publication};
