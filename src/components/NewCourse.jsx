import React, { useState } from 'react'

export default function NewCourse(props) {
  const { newCourse } = props;

  // const [title, setTitle] = useState('');
  // const [image, setImage] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState('');
  // const [hasDiscount, setDiscount] = useState(false);
  // const [type, setType] = useState('remote');
  const [course, setCourse] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
    hasDiscount: false,
    type: 'remote'
  })

  const handleChange = (e) => {
    const conditionalValue = e.target.name === 'price' ? parseInt(e.target.value) : e.target.value;
    setCourse(prev => {
      return {
        ...prev,
        [e.target.name]: conditionalValue
      }
    })
    console.log(course);
  }

  const handlePrice = (e) => {
    setCourse(prev => {
      return {
        ...prev,
        price: parseInt(e.target.value)
      }
    })
  }

  const handleCheck = (e) => {
    setCourse(prev => {
      return {
        ...prev,
        hasDiscount: e.target.checked
      }
    })
  }

  const handleForm = (e) => {
    e.preventDefault();
    newCourse(course);
    setCourse({
      title: '',
      image: '',
      description: '',
      price: '',
      hasDiscount: false,
      type: 'remote'
    })
    // newCourse(course);
    // const course = {
    //   title: title,
    //   image: image,
    //   description: description,
    //   price: parseInt(price),
    //   hasDiscount: hasDiscount,
    //   type: type
    // }
    // newCourse(course);
    // setTitle('');
    // setImage('');
    // setDescription('');
    // setPrice('');
    // setDiscount(false);
    // setType('remote');
  }

  return (
    <div className="form">
      <h3>Create new course</h3>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Title" name="title" value={course.title} onChange={(e) => handleChange(e)} />
        <input type="text" placeholder="Image url" name="image" value={course.image} onChange={(e) => handleChange(e)} />
        <input type="text" placeholder="Description" name="description" value={course.description} onChange={(e) => handleChange(e)} />
        <input type="number" placeholder="Price" name="price" value={course.price} onChange={(e) => handlePrice(e)}/>
        <label>Has discount?</label>
        <input type="checkbox" checked={course.hasDiscount} name="hasDiscount" onChange={(e) => {handleCheck(e)}}/>
        <select value={course.type} name="type" onChange={(e) => handleChange(e)}>
          <option value="remote">Remote</option>
          <option value="in person">In person</option>
        </select>
        <button type="submit">Save new course</button>
      </form>
    </div>
  )
}
