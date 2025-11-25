import React from 'react'
var title="Harry Potter"
var imgpath="https://i.pinimg.com/736x/8f/40/28/8f4028675de8fa4d44c828b76c6b881f.jpg";
var author="J.K.ROWLING";
var person={name:"Aniket", age:24,phone:"9857412650"};
var samplearr=[{id:100,name:"Aniket",age:24},{id:101,name:"Jayesh",age:23}]
const BookList = () => {
  return (
    <div className='myclass'> 
      <Book1 title="Harry Potter and the Philosopher's Stone" imgpath="https://i.pinimg.com/736x/8f/40/28/8f4028675de8fa4d44c828b76c6b881f.jpg" author="J.K.ROWLING"></Book1>
      <Book1 title="Harry Potter and The Chamber of Secrets" imgpath="https://m.media-amazon.com/images/I/818umIdoruL.jpg" author="J.K.ROWLING"></Book1>
      <Book1 title="Harry Potter and the Prisoner of Azkaban" imgpath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ7EgbTnVmg2unlyrs9CBOn9Lh9fGZT3Xag&s" author="J.K.ROWLING"></Book1>
    </div>
  )
}
var Book1=(props)=>{
  return(<div className='mybook'>
    <h3>{props.title}</h3>
    <img src={props.imgpath} alt="not found" width="300px"/>
    <h3>{props.author}</h3>
  </div>)
}
var Book=()=>{
    return(<div>
        {/* <h3>Ideas and opinio</h3>
        <img src="https://i.pinimg.com/736x/8f/40/28/8f4028675de8fa4d44c828b76c6b881f.jpg" alt="not found" width="700px"></img>
        <h3>J.K.ROWLING</h3> */}
        {/* <h3>{title}</h3>
        <img src={imgpath} alt="not found" width="200px"></img>
        <h3>{author}</h3> */}
        <h3>{person.name}---{person.age}---{person.phone}</h3>
        <h3>{samplearr[0].id}--{samplearr[0].name}--{samplearr[0].age}</h3>
        <h3>{samplearr[1].id}--{samplearr[1].name}--{samplearr[1].age}</h3>
    </div>)
}
export default BookList;