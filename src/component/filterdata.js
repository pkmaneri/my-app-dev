// import React, { useState } from 'react';

// const FilterData = () => {
//   const [searchTerm, setSearchTerm] = useState('');

  
//   const users = [
//     {
//       id: 1,
//       name: 'Alice',
//       favoriteBooks: ['1984', 'Brave New World',"Eloquent JavaScript, Third Edition",],
//     },
//     {
//       id: 2,
//       name: 'Bob',
//       favoriteBooks: ['Moby Dick', '1984',"Practical Modern JavaScript",],
//     },
//     {
//       id: 3,
//       name: 'Charlie',
//       favoriteBooks: ['The Great Gatsby',"Understanding ECMAScript 6"],
//     },
//   ];

//   const filteredUsers = users.filter(user =>
//     user.favoriteBooks.some(book => book.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div>
//       <h1>Filter Users by Favorite Books</h1>
//       <input
//         type="text"
//         placeholder="Search for a book..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {filteredUsers.map(user => (
//           <li key={user.id}>
//             {user.name} - Favorite Books: {user.favoriteBooks.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilterData;



import React, { useState } from 'react';

// Sample book data
const bookData = {
  users: [
    {
      isbn: "9781593279509",
      title: "Eloquent JavaScript, Third Edition",
      author: "Marijn Haverbeke",
    },
    {
      isbn: "9781491943533",
      title: "Practical Modern JavaScript",
      author: "Nicolás Bevacqua",
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
    },
    {
      isbn: "9798602477429",
      title: "You Don't Know JS Yet",
      author: "Kyle Simpson",
    },
    {
      isbn: "9781484200766",
      title: "Pro Git",
      author: "Scott Chacon and Ben Straub",
    },
    {
      isbn: "9781484242216",
      title: "Rethinking Productivity in Software Engineering",
      author: "Caitlin Sadowski, Thomas Zimmermann",
    },
  ],
};

const FilterData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = bookData.users.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* {searchTerm && filteredBooks.length > 0 && (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.isbn}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
      {searchTerm && filteredBooks.length === 0 && (
        <p>No results found.</p>
      )} */}
      {searchTerm && filteredBooks.length>0 &&(
         <ul>
         {filteredBooks.map(book => (
           <li key={book.isbn}>
             <strong>{book.title}</strong> by {book.author}
           </li>
         ))}
       </ul>
      )}
       {searchTerm && filteredBooks.length===0 &&(
         <p> no result found</p>
      )}
      {/* <ul>
        {filteredBooks.map(book => (
          <li key={book.isbn}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FilterData;

