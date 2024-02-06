import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${\capitlizeFirstLetter(props.category)} - NewsMonkey`;

    const capitlizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
    
    const update = async ()=>{
      props.setProgress(10);
      const Nurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
      setLoading(true);
      let data=await fetch(Nurl);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResult);
      setLoading(false);
      props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitlizeFirstLetter(props.category)} - NewsMonkey`;
        update();
        //eslint-disable-next-line
    }, [])
    
    // const handelPreClick = async ()=>{
    //   setPage(page+1);
    //   update();
    // }
    // const handelNextClick = async ()=>{
    //   setPage(page+1);
    //   update();
    // }
    const fetchMoreData = async () => {
      const Nurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`
      setPage(page+1)
      let data=await fetch(Nurl);
      let parsedData=await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResult);
    }
    return (
      <>
        <h1 className="text-center" style={{margin: "35px 0px", marginTop:'90px'}}>NewsMonkey - top {capitlizeFirstLetter(props.category)} headline </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row' >
          {articles.map((element)=>{
            return <div className='col md-4' key={element.title}>
                <NewsItem title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 88):" "} 
                imgUrl={element.urlToImage?element.urlToImage: "https://static.toiimg.com/thumb/msid-107216675,width-1070,height-580,imgsize-31926,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} 
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
  News.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general',
  }
  News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

export default News
