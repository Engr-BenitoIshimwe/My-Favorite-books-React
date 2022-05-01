import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
import { data } from './books';
import SpecificBook from './Book'; // You can call it the name you want and you have to be consistent with using the same name you chose
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

/*

Modules in react

/*index.js
import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
import { data } from './books';
import SpecificBook from './Book'; // You can call it the name you want and you have to be consistent with using the same name you chose
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
*********************
/*books.js
export const data = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg',
    title: '99 Bad Boy Traits: that Instantly Attract Women',
    author: 'Marc Summer',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51MT0MbpD7L.jpg',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51KFwNo2mOL.jpg',
    title: 'The Warrior Ethos',
    author: 'Steven Pressfield',
  },
];
*************************
/*Book.js
import React from 'react';

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world');
  };
  const clickHandler1 = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const complexExample2 = (author) => {
    console.log(author);
  };

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Power
      </button>
      <button type='button' onClick={clickHandler1}>
        Money
      </button>
      <button type='button' onClick={complexExample(author)}>
        {/* We immediately invoked this function before clicking it  *}
        Love
      </button>
      <button
        type='button'
        onClick={() => {
          complexExample2(author);
        }}
      >
        Family And Friends
      </button>
    </article>
  );
};
export default Book;
************************
/*testing.js
export let greeting = 'hello world';
************************
/*index.css
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #f1f5f8;
  color: #222;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}
@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.book h1 {
  margin-top: 0.5rem;
}

.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.book p {
  margin-top: 0.5rem;
}



/******************************
 ****************************
 

https://reactjs.org/docs/events.html // react events

/*****************************************
 THE STANDARDISED BENITO'S REACT COMPONENT
******************************************

import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
// setup vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg',
    title: '99 Bad Boy Traits: that Instantly Attract Women',
    author: 'Marc Summer',
  },

  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51MT0MbpD7L.jpg',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51KFwNo2mOL.jpg',
    title: 'The Warrior Ethos',
    author: 'Steven Pressfield',
  },
];
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

/*****************************************
 
******************************************

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  
  const { img, title, author } = props;
  
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

***

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


/***********************


/*********************************************************
 
    B E N I T O  S C A N D I W E B  D E V E L O P E R     

              BENITO SCANDIWEB DEVELOPER

    B E N I T O  S C A N D I W E B  D E V E L O P E R

/*********************************************************


{
    id: 3,
    img: 'https://m.media-amazon.com/images/I/51KFwNo2mOL.jpg',
    title: 'The Warrior Ethos',
    author: 'Steven Pressfield',
  },
];
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} book={book}></Book>; // use book.id to access them with their id else will get an error they need a key
        // return <Book key={index} book={book}></Book>; // we can use index but not something reliable because index change time and time
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


/***********************



function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return (
          <div>
            <p>{img}</p>
            <h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

/***********************


/*********************************************************
 
    B E N I T O  S C A N D I W E B  D E V E L O P E R     

              BENITO SCANDIWEB DEVELOPER

    B E N I T O  S C A N D I W E B  D E V E L O P E R

/*********************************************************


const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => { // map separates each item in an array to help us while iterating them 
  // console.log(name); 
  // output johnpetersusan
  return <h1>{name}</h1>;
  output john
         peter
         susan
});
console.log(newNames);
function BookList() {
  return <section className='booklist'>{newNames}</section>;

/************************

import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg',
  title: '99 Bad Boy Traits: that Instantly Attract Women',
  author: 'Marc Summer',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51MT0MbpD7L.jpg',
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson',
};
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));

/******************

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
**
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
***
<Book /> // Technically the same
<Book></Book>
*** 
const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1> 
       {children} // wherever you want it to be
      <h4>{author}</h4>
      {children}
**
const Book = ({ img, title, author, children }) => {
<img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
**
const Book = (props) => {
const { img, title, author } = props;
<img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
**
const Book = (props) => {
<img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>

/********************

// CSS

import './index.css';
// setup vars

const author = 'Marc Summer';

const title = '99 Bad Boy Traits: that Instantly Attract Women';

const img =
  'https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
      {/* {console.log(props)} *}
    </article>
  );
};
/**************************

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const author = 'Marc Summer'
const Book = () => {
  const title = '99 Bad Boy Traits: that Instantly Attract Women'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> *}
    </article>
  )
}

/*****************************

// Nested Components, React Tools

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/41lVfTO7gfL._SX331_BO1,204,203,200_.jpg'
    alt=''
  />
)
// const Title = () => {
//   return <h3>99 Bad Boy Traits: that Instantly Attract Women</h3>
// }
const Title = () => <h1>99 Bad Boy Traits: that Instantly Attract Women</h1>

// const Author = () => {
//   return <h3>Marc Summers </h3>
// }
const Author = () => (
  <h4 style={{ color: '617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Marc Summers{' '}
  </h4>
)

/***********************

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
      {/* <p>This is my message</p> *}
    </div>
  )
}

const Person = () => <h2>Benito Ishimwe</h2>
const Message = () => {
  return <p>this is my message</p>
}

/************************

function Greeting() {
  return (
    <div>
    <h4 className=''>Hello World</h4>
    <ul>
    <li>
    <a href='#'>hello world</a>
    </li>
    <img src='' alt=''/>
    <input type='text' name='' id='' />
    </ul>
    </div>
    );
  }

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// YOU CAN WRITE 

<React.Fragment>
</React.Fragment> 

// OR

<>
</> // to include outer html tags we use theser

/**************

// stateless functional component
// always return JSX


function Greeting() {
  return <h4>Hello World</h4>
}

const Greeting = () => {
  return React.createElement('h1', {}, 'hello World') 
}

function Greeting() {
  return (
    <div>
    <h4>Hello World</h4>
    </div>
    );
  }

  const Greeting = () => {
  return React.createElement(
    'h1',
    {}, 
    React.createElement('h1',{},'hello World') 
    );
}; 


*/
