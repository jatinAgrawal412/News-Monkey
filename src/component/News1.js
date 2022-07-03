import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//For Unlimited scrool down vision
export default class News1 extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log('Hello ');
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstletter(this.props.category)} - NewsMonkey`
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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
        console.log('cdm');
        this.updateNews();
      }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adfd70e041d042cf8270001956cb01b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    render() {
        return (
            <>
                <h2 className='text-center' style={{ margin: '40px 0px' }}>News NewsMonkey - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return (<div className="col-md-4" key={element.url}>
                                    <NewsItem newsUrl={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} key={index}/>
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
