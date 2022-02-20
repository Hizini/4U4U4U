import React, { Component } from 'react'
import './Join.scss';

import { Dialog } from "@material-ui/core";

class Join extends Component {

    render() {
        const { open, onClose } = this.props
        return (
            <Dialog open={open} onClose={onClose}>
                <div className="join-container">
                    <div className='close'><div className='close-button'>
                        <img src='images/dialogClose.svg' alt='close' onClick={onClose}/>
                    </div></div>
                    <div className='join-title'>
                        <div className='join-logo'><img src='images/logo.svg' alt='logo'/></div>
                        <div className='join-title-join'>회원가입</div>
                    </div>
                    <div className="join-body">
                        <div className='join-input'>
                            <input className="join-id" type="text" name='id' placeholder="이메일"></input>
                            <input className="join-nickname" type="text" name='nickname' placeholder="닉네임"></input>
                            <input className="join-password" type="password" name='password' placeholder="비밀번호"></input>
                            <input className="join-password-check" type="password" name='passwordCheck' placeholder="비밀번호 확인"></input>
                        </div>
                        <div className='join-agree'>
                            <div className='join-agree-check'>
                                <input type="checkbox" name='check'></input>
                                <div className='join-agree-des'><span>이용약관</span> 및 <span>개인정보 취급방침</span>에 대한 내용을 모두 확인하였으며, 이에 동의합니다.</div>
                            </div>
                        </div>
                        <div className='join-button-area'>
                            <div className='join-button'>회원가입</div>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default Join