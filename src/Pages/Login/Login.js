import React, { Component } from 'react'
import './Login.scss';

import { Dialog } from "@material-ui/core";

class Login extends Component {

    render() {
        const { open, onClose, clickJoin } = this.props
        return (
            <Dialog open={open} onClose={onClose}>
                <div className="login-container">
                    <div className='close'><div className='close-button'>
                        <img src='images/dialogClose.svg' alt='close' onClick={onClose}/>
                    </div></div>
                    <div className='login-title'>
                        <div className='login-logo'><img src='images/logo.svg' alt='logo'/></div>
                        <div className='login-title-login'>로그인</div>
                    </div>
                    <div className="login-body">
                        <div className='login-input'>
                            <input className="login-id" type="text" name='loginId' placeholder="이메일"></input>
                            <input className="login-password" type="password" name='loginPassword' placeholder="비밀번호"></input>
                        </div>
                        <div className='login-button-area'>
                            <div className='login-button'>로그인</div>
                        </div>
                        <div className='login-join'>
                            <div className='join-member-des'>아직 회원이 아니신가요?</div>
                            <div className='join-member' onClick={clickJoin}>회원가입하기</div>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default Login