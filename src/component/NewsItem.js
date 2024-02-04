import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imgUrl, newsUrl, author, date, source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='caed-text'><small className='text-muted'>By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem