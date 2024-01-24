import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article=
     [
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Sachin Tendulkar: Indian cricket legend warns of 'disturbing' deepfake video",
          "description": "The fake video appears to show Sachin Tendulkar promoting an online gaming app.",
          "url": "https://www.bbc.co.uk/news/world-asia-india-67989930",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/184F5/production/_132337599_gettyimages-1161147027.jpg",
          "publishedAt": "2024-01-16T09:36:23Z",
          "content": "Indian cricket legend Sachin Tendulkar has criticised a deepfake video in which he seems to be promoting an online gaming app.\r\nThe video shows him praising the app as a quick way to make money.\r\n\"Th… [+2052 chars]"
        },
        {
          "source": { "id": null, "name": "XDA Developers" },
          "author": "Christopher Burke",
          "title": "How to download Cricket 07 in Windows 11",
          "description": "Although Cricket games are no longer made by EA, you can still play the classic Cricket 07 on Windows 11",
          "url": "https://www.xda-developers.com/how-download-cricket-07-windows/",
          "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/12/77.png",
          "publishedAt": "2023-12-23T12:00:25Z",
          "content": "EA was the king of sports games in the early 2000s, covering nearly every major sport. Cricket was one of the recurring titles in the EA Sports franchise. But, by the end of the decade, EA stopped pr… [+4660 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Blackpool Tower fire: Five other times people were fooled by false alarms",
          "description": "After orange netting was mistaken for flames, we revisit five other big public \"whoops\" moments.",
          "url": "https://www.bbc.co.uk/news/uk-67802959",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/84C2/production/_132168933_01hjrkww9b6na25se5xhhmv2ev.jpg",
          "publishedAt": "2023-12-29T14:15:20Z",
          "content": "Things are not always what they seem. And there is no better example of that old adage than Blackpool Tower and the fire that never was.\r\nOn Thursday, six fire engines, a drone team and a rope-rescue… [+3911 chars]"
        },
        {
          "source": { "id": "time", "name": "Time" },
          "author": "Charlie Campbell",
          "title": "Pakistan Can Keep Imran Khan Out of Power, But It Can’t Keep His Popularity Down",
          "description": "The country’s military kingmakers can keep former Prime Minister Imran Khan out of power, but they can’t keep his popularity down.",
          "url": "https://time.com/6556335/pakistan-election-imran-khan-nawaz-sharif-military-pti/",
          "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/pakistan-election-imran-khan-nawaz-sharif-military-pti.jpg?quality=85",
          "publishedAt": "2024-01-17T08:30:00Z",
          "content": "Its not been a great couple of years for Pakistans Imran Khan. Since his ouster as Prime Minister in an April 2022 no-confidence vote, the cricketer-turned-politician has been shot, hit with over 180… [+7475 chars]"
        },
        {
          "source": { "id": null, "name": "Deadspin" },
          "author": "Cale Clinton",
          "title": "These are the oldest players in NFL history",
          "description": "The NFL is a rough, violent game. The average career length in the modern NFL is just 3.3 years in the league. This is why it’s so impressive to see these NFL legends play so deep into their 40s. How many more names will we see join the ranks of the league’s …",
          "url": "https://deadspin.com/oldest-nfl-players-tom-brady-george-blanda-testaverde-1851087598",
          "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/df14b07ad80c4f8d96f3b2ac25859b4c.jpg",
          "publishedAt": "2023-12-24T12:00:00Z",
          "content": "Age: 44 years, 117 days\r\nTeams: Detroit Lions, Kansas City Chiefs, Tampa Bay Buccaneers, Dallas Cowboys, Philadelphia Eagles, Washington, Minnesota Vikings\r\nFun fact: His Canadian high school didnt o… [+69 chars]"
        },
        {
          "source": { "id": "bbc-news", "name": "BBC News" },
          "author": null,
          "title": "SA have 'utmost respect' for Tests after criticism",
          "description": "Cricket South Africa says it has \"utmost respect\" for Test cricket after they receive criticism for naming a weakened squad for a tour of New Zealand.",
          "url": "https://www.bbc.co.uk/sport/cricket/67866091",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1E1D/production/_132190770_gettyimages-1195391664.jpg",
          "publishedAt": "2024-01-02T17:30:56Z",
          "content": "Wicketkeeper David Bedingham, who only made his Test debut on 26 December, will go to New Zealand as one of eight capped players\r\nCricket South Africa (CSA) says it has the \"utmost respect\" for Test … [+4759 chars]"
        }
      ]
    constructor(){
        super();
        this.state={
            article: this.article,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - top headline</h2>
        <div className='row' >
          {this.state.article.map((element)=>{
            return <div className='col md-4' key={element.url}>
                <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
