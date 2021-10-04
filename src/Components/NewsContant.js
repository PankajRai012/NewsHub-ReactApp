import React, { Component } from "react";

export default class NewsContant extends Component {
  render() {
    let{NewsTitle,Description,ImgUrl,NewsUrl,DateTime,source,author}=this.props;
    

    return (
      <>
      
        <div className="card my-4 mx-4">
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
            <img className="card-img-top" width="286px" height="150px" src={ImgUrl} alt="Loading Faild" />
            <div className="card-body">
                <h5 className="card-title">{NewsTitle ? (NewsTitle.length <= 39 ? NewsTitle : NewsTitle.slice(0, 39) + "...") : " "}</h5>
                <p className="card-text">{Description ? (Description.length <= 89 ? Description : Description.slice(0, 89) + "...") : ""}</p>
                <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Full News</a>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(DateTime).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}</small></p>
            </div>
            
        </div>
      </>
    );
  }
}
