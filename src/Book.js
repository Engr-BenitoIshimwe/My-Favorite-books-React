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
        {/* We immediately invoked this function before clicking it  */}
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
