import React from 'react'
import './card-style.css'


function CardsUi(props) {
  return (
      <div className="card tex-center">
          <div className="overflow">
                <img src={props.imgsrc} alt="images of wtf" className='card-img-top'/>
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">
                  {props.title}
              </h4>
              <p className="card-text text-secondary">
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempore aliquam ratione
                  incidunt reprehenderit quos voluptate
                  iusto ad at sed? Eveniet?
              </p>
              <a href="#" className='btn btn-outline-danger'>Click Here</a>
          </div>
      </div>
      
  )
}

export default CardsUi