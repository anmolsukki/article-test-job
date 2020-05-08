import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from "../Redux/Actions/actionTypes/index";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

class Articles extends Component {
    componentDidMount() {
        this.props.getArticle();
    }

    removeArticle = (id) => {
       this.props.onDelete(id)
    }

    markRead = (article) => {
        this.props.onRead(article)
    }

    render () {
        console.log(this.props)
        let counter = 0;
        this.props.articleData.getData.data && this.props.articleData.getData.data.forEach(el => {
            if(el.isRead === false) counter++;
        });

        return (
            <div className="page-content">
                <div className="sidebar-menu">
                    <div className="logo">
                        <img src="theme/images/icons/logo.png" alt="icons" />
                    </div>
                    <div className="menu-bar-list">
                        <ul>
                            <li className="">
                                <Link to="/" className="nav-l active">
                                    <img src="theme/images/icons/dashboard_icon.svg" alt="icon-dashboard" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="nav-l">
                                    <img src="theme/images/icons/sessions_icon.svg" alt="icon-sessions" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="nav-l">
                                    <img src="theme/images/icons/meetings_icon.svg" alt="icon-meetingds" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="nav-l">
                                    <img src="theme/images/icons/files_icon.svg" alt="files_icon" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="nav-l">
                                    <img src="theme/images/icons/conversations_icon.svg" alt="conversations_icon" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/" className="nav-l">
                                    <img src="theme/images/icons/settings_icon.svg" alt="settings_icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div className="top-bar">
                        <div className="left-action">
                            <ul>
                                <li>
                                    <div className="searching-bar">
                                        <i className="fa fa-search"></i>
                                        <input type="text" className="form-control" placeholder="Find a user, team, meeting…" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right-action">
                            <div className="user-dropdown">
                                <div className="user-pic" style={{ backgroundImage: "url(images/icons/Oval%202.png)"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-panel">
                        <div className="top-actions">
                            <div className="top-left-action">
                                <div className="title">Articles</div>
                            </div>
                            <div className="top-right-action">
                                <div className="action-box">
                                    <ul>
                                        <li><Link to="/" id="grid" className="active"><img className="active" src="theme/images/icons/card_active.svg" alt="card_icon" /> <img className="inactive" src="theme/images/icons/card.svg" alt="card_icons" /> Card</Link></li>
                                        <li><Link to="/" className="table-view"><img className="active" src="theme/images/icons/table_active.svg" alt="table_active" /> <img className="inactive" src="theme/images/icons/table.svg" alt="table" /> Table</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card-b">
                                            <div className="title">
                                                Number of articles
                                                <div className="right-drop">
                                                    <div className="dropdown">
                                                    <i className="fa fa-ellipsis-h  dropdown-toggle no-caret" type="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    </i>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <Link to="/" className="dropdown-item">Mark All as Read</Link>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="task">
                                                <span className="blue">{this.props.articleData.getData.data && this.props.articleData.getData.data.length}</span> The Day
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card-b">
                                            <div className="title">
                                                Unread articles
                                                <div className="right-drop">
                                                    <div className="dropdown">
                                                    <i className="fa fa-ellipsis-h  dropdown-toggle no-caret" type="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    </i>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <Link to="/" className="dropdown-item">Mark All as Read</Link>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="task">
                                                <span className="orange">{counter}</span> The Day
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history">
                            <div className="title">
                                Today
                            </div>
                            <div id="cards" className="card-panel">
                            <div className="row">
                            { this.props.articleData.getData.data && this.props.articleData.getData.data.map((data, i) => {
                                return (
                                <div key={`li${i}`} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                    {data.isRead === true ?
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="card-bx">
                                            <div className="user-details">
                                                <div className="activeted"></div>
                                                <div className="user-img" style={{backgroundImage: "url(theme/images/icons/avatar.png)"}}>
                                                </div>
                                                <div className="user-name">{data.author}</div>
                                                <div className="user-email">{data.email}</div>
                                                <div className="user-post">{data.jobTitle}</div>
                                            </div>
                                            <div className="user-content">
                                                <div className="user-heading">{data.title}</div>
                                                <div className="user-subcontent">{data.desc}</div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="card-bx">
                                            <div className="user-details">
                                                <div className="user-img" style={{backgroundImage: "url(theme/images/icons/avatar2.png)"}}>
                                                </div>
                                                <div className="user-name">{data.author}</div>
                                                <div className="user-email">{data.email}</div>
                                                <div className="user-post">{data.jobTitle}</div>
                                            </div>
                                            <div className="user-content">
                                                <div className="user-heading">{data.title}</div>
                                                <div className="user-subcontent">{data.desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>
                                )})}
                                </div>
                            </div>
                            <div id="table" className="card-panel table-responsive">
                                <table className="table">
                                    <tbody>
                                    { this.props.articleData.getData.data && this.props.articleData.getData.data.map((data, i) => {
                                        return (
                                        <tr key={`li${i}`}>
                                            <td>
                                                <div className="user-details">
                                                    <div className="user-img" style={{backgroundImage: "url(theme/images/icons/avatar2.png)"}}></div>
                                                    <div className="user-name">{data.author}</div>
                                                    <div className="user-email">{data.email}</div>
                                                    <div className="user-post">{data.jobTitle}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="user-content">
                                                    <div className="user-heading">{data.title}</div>
                                                    <div className="user-subcontent">{data.desc}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="user-skills">
                                                    <span>{data.tags.join(", ")}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="user-action">
                                                    <Link to="/"><img src="theme/images/icons/delete.svg" alt="delete_icons" onClick={() => this.removeArticle(data.id)} /></Link>
                                                    <Link to="/" className="btn-mark" onClick={()=> this.markRead(data)} >{data.isRead === false ? "Mark as Read" : "Mark Unread" }</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )})}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articleData: state.CtrArticle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getArticle: () => dispatch(actionCreator.articles()),
        onDelete: (id) => dispatch(actionCreator.deleteArticle(id)),
        onRead: (id) => dispatch(actionCreator.readArticle(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
