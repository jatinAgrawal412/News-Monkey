import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { newsUrl, title, description, imageUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{}}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-success">{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "https://images.livemint.com/img/2022/06/12/600x338/razorpay-ke1F--621x414@LiveMint_1655035940292.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author ? author : 'Unkonwn'} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="
              _blank" className="btn btn-sm btn-primary btn-dark">read More</a>
          </div>
        </div>
      </div>
    )
  }
}
