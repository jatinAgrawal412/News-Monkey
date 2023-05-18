import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

//For next previous pageination vision
export default class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category : 'general',

  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  capitalizeFirstletter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log('Hello ');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey`
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adfd70e041d042cf8270001956cb01b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(data);
    
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePreClick = async () => {
    this.setState({page:this.state.page -1});
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({page:this.state.page +1});
    this.updateNews();
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin : '40px 0px'}}>News NewsMonkey - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem newsUrl={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>)
          })}
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type='button' className='btn btn-dark mx-2' onClick={this.handlePreClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark mx-2' onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}
