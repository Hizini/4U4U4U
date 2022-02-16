
import React, { Component } from 'react'
import Login from '../Login/Login'
import Join from '../Join/Join'
import TemplateDetail from '../TemplateDetail/TemplateDetail'
import './Home.scss'

import axios from 'axios'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpenLoginDialog: false,
            isOpenJoinDialog: false,
            isOpenTemplateDetail: false,
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://172.20.10.8:8084/getSampleList')
        console.log(response)
    }

    handleClickTemplateDetailDialog = () => this.setState({ isOpenTemplateDetail: true })
    handleClickTemplateDetailDialogClose = () => this.setState({ isOpenTemplateDetail: false })

    handleClickJoinDialog = () => this.setState({ isOpenJoinDialog: true, isOpenLoginDialog: false })
    handleClickJoinDialogClose = () => this.setState({ isOpenJoinDialog: false })

    handleClickLoginDialog = () => this.setState({ isOpenLoginDialog: true })
    handleClickLoginDialogClose = () => this.setState({ isOpenLoginDialog: false })

    render() {
        const { 
            isOpenLoginDialog,
            isOpenJoinDialog,
            isOpenTemplateDetail,
         } = this.state
        return (
            <div className='home-container'>
                <div className='menu-container'>
                    <div className='logo-container'>
                        <img className='logo' src='images/logo.png' alt='logo' onClick={() => this.props.history.push('/')} />
                    </div>
                    <div className='nav-container'>
                        <div className='menu-nav'>
                            <div>전체보기</div>
                            <div>메뉴1</div>
                            <div>메뉴2</div>
                        </div>
                        <div className='user-nav'>
                            <div onClick={this.handleClickLoginDialog}>로그인</div>
                            <div onClick={this.handleClickJoinDialog}>회원가입</div>
                        </div>
                    </div>
                </div>
                <div className='banner-container'>
                    <div className='banner-left'>
                        <div className='banner-text'>ㅇㅇㅇㅇㅇㅇㅇㅇ랄ㅇㅇㅇ<br />ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                        <div className='banner-event-button'>이벤트 시작하기</div>
                    </div>
                    <div className='banner-right'>
                        <div className='banner-marketing-area'>
                            <img className='banner-marketing' src='images/video.png' alt='marketing' />
                        </div>
                    </div>
                </div>
                <div className='weekly-top-container'>
                    <div className='weekly-top-title'>주간 TOP 10</div>
                    <div className='weekly-top-body'>
                        <div className='arrow-area'><img src='images/leftArrow.png' alt='arrow' /></div>
                        <div className='top-thumbnail'>
                            <div><div className='rank'>1</div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><div className='rank'>2</div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><div className='rank'>3</div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><div className='rank'>4</div><img src='images/img.png' alt='thumbnail' /></div>
                        </div>
                        <div className='arrow-area'><img src='images/rightArrow.png' alt='arrow' /></div>
                    </div>
                    <div className='genre-container'>
                        <span className='genre-title'>로맨틱</span>
                        <div className='genre-thumbnail' onClick={this.handleClickTemplateDetailDialog}>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                        </div>
                        <span className='more'>더보기</span>
                    </div>
                    <div className='genre-container'>
                        <span className='genre-title'>호러</span>
                        <div className='genre-thumbnail'>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                            <div><img src='images/img.png' alt='thumbnail' /></div>
                        </div>
                        <span className='more'>더보기</span>
                    </div>
                </div>
                <Login
                    open={isOpenLoginDialog}
                    onClose={this.handleClickLoginDialogClose}
                    clickJoin={this.handleClickJoinDialog}
                />
                <Join
                    open={isOpenJoinDialog}
                    onClose={this.handleClickJoinDialogClose}
                />
                <TemplateDetail
                    open={isOpenTemplateDetail}
                    onClose={this.handleClickTemplateDetailDialogClose}
                />
            </div>
        )
    }
}

export default Home