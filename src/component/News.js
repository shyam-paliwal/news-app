import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
      country: 'in',
      pagesize: 8,
      category: 'general',
    }
    static propTypes = {
      country: PropTypes.string,
      pagesize: PropTypes.number,
      category: PropTypes.string,
    }
    capitlizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.capitlizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async update(){
      const Nurl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7532e2a08b14f2b86025eedd63b7c2f&page=${this.state.page}&pagesize=${this.props.pagesize}`
      this.setState({loading: true});
      let data=await fetch(Nurl);
      let parsedData=await data.json();
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
    }
    async componentDidMount(){
      this.update();
    }
    handelPreClick = async ()=>{
      // let Nurl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7532e2a08b14f2b86025eedd63b7c2f&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
      // this.setState({loading: true});
      // let data=await fetch(Nurl);
      // let parsedData=await data.json();
      // this.setState({
      //   page: this.state.page-1,
      //   articles: parsedData.articles,
      //   loading: false
      // });
   
      this.setState({page: this.state.page-1});
      this.update();
    }
    handelNextClick = async ()=>{
      // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      //   let Nurl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7532e2a08b14f2b86025eedd63b7c2f&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
      //   this.setState({loading: true});
      //   let data=await fetch(Nurl);
      //   let parsedData=await data.json();
      //   this.setState({
      //     page: this.state.page+1,
      //     articles: parsedData.articles,
      //     loading: false
      //   });
      // }

      this.setState({page: this.state.page + 1});
      this.update();
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: "35px 0px"}}>NewsMonkey - top {this.capitlizeFirstLetter(this.props.category)} headline </h1>
        {this.state.loading && <Spinner/>}
        <div className='row' >
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 88):" "} 
                imgUrl={element.urlToImage?element.urlToImage: "https://static.toiimg.com/thumb/msid-107216675,width-1070,height-580,imgsize-31926,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} 
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handelPreClick}> &larr; previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type='button' className='btn btn-dark' onClick={this.handelNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
