import React, { Component } from 'react'
import NewsContant from "./NewsContant";
import Spinner from "./Spinner";

export default class News extends Component {
 
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    } 
  }
  async UpdateData(page) {
    this.props.setProgressVal(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f758c46517b14d59b3e5497e2b9eae06&category=${this.props.category}&page=${page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.props.setProgressVal(30);
    let parsedData = await data.json()
    this.props.setProgressVal(60);
    this.setState({
      page: page,
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    })
    this.props.setProgressVal(100);

  }
  async componentDidMount() {
    this.UpdateData(this.state.page);
    document.addEventListener("scroll", this.getmoredata);

  }
  getmoredata = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement; //properties of scrollbar
    if (scrollTop + clientHeight === scrollHeight) //check scrollbar on the bottom or
    {
      let a = this.state.page;
      a = this.state.totalResults - a * this.props.pageSize;
      if (a > 0) {
        this.setState({ loading: true });
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f758c46517b14d59b3e5497e2b9eae06&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          loading: false,
          totalResults: parsedData.totalResults
        })
      }

    }

  }



  render() {
    
    return (
      <>
       <h2 className="text-center mt-3">NewsHub - {this.props.title} Top Headlines</h2>
        <div className="container">
         <div className="row">
        
            {this.state.articles.map((api) => {
              return (
                <div className="col-md-4 " key={api.url}>
                  <NewsContant 
                  NewsTitle={api.title} 
                  Description={api.description}
                  ImgUrl={api.urlToImage}
                  NewsUrl={api.url}
                  DateTime={api.publishedAt}
                  source={api.source.name}
                  author={api.author}
                  
                  />
                </div>
              )
            })}
          </div>
          {this.state.loading && <Spinner />}
        </div>


      </>
    )
  }
}
