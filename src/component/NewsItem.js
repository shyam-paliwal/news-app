import React from 'react'

const NewsItem=(props)=>{
    let {title, description,imgUrl, newsUrl, author, date, source}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <div className='container' style={{
            display:'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0'
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
           </div>
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

export default NewsItem
