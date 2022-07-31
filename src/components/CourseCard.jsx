import React from 'react'

export default function CourseCard(props) {
  const { info: { title, image, description, price, type, hasDiscount } } = props;

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title} width="100%" />
      <p>{description}</p>
      <p><span className="span-type">Type: {type}</span> | <span className="span-price">Price: {price}$</span></p>
      {hasDiscount && <p>Super discount available!</p>}
      <button className="card-btn">I want to know more</button>
    </div>
  )
}
