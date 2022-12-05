import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SalesPerson = ({ image, imageAlt, name, cell, phone, email }) => {
  return (
    <div className="sales__one">
      <div className="image">
        <GatsbyImage
          image={getImage(image)}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="contact">
        <p>{name}</p>
        <p>
          cell: <a href={`tel: +1${cell}`}>{cell}</a>
        </p>
        <p>
          office: <a href={`tel: +1${phone}`}>{phone}</a>
        </p>
        <p>
          email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  )
}

export default SalesPerson
