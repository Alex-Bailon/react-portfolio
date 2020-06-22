import React from "react";

function Card( { projects }) {
  return (
    <>
    {projects.map(project => (
      <div className="col mb-3">
        <div className="card h-100">
          <a href={ project.live } target="_blank">
            <img src={ project.image } alt='' className="card-img-top" />
          </a>
          <div className="card-body">
            <h5 className="card-title">{ project.name }</h5>
            <p className="card-text">{ project.description }<br/>
              <a  
                href={ project.github }
                target="_blank"
                >Link to Github repository</a>
            </p>
          </div>
        </div>
      </div>
  ))}
  </>
  )
}

export default Card