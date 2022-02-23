import React, { Component } from 'react'
import './Event.scss';

import { Paper, IconButton, InputBase } from "@material-ui/core";

class Event extends Component {

    render() {

        return (
            <div className="event-container">
                <div className='event-body'>
                    <div className='event-left'>
                        <div className='category-search'>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 300 }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 2, }}
                                    placeholder="카테고리 검색"
                                // inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" sx={{ p: '10px', flex: 1 }} aria-label="search">
                                    <img className='search-img' src='images/search.png' alt='search' />
                                </IconButton>
                            </Paper>
                        </div>
                        <div className='category-body'>
                            <div className='category-first'>
                                <div className='category-title'>카테고리 1</div>
                                <div className='category-thumbnail'>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목1</div></div>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목2</div></div>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목3</div></div>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목4</div></div>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목5</div></div>
                                </div>
                            </div>
                            <div className='category-second'>
                                <div className='category-title'>카테고리 2</div>
                                <div className='category-thumbnail'>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목1</div></div>
                                    <div className='category-content'><img src='images/img.png' alt='thumbnail' /><div>제목2</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='event-right'>
                        <div className='event-page'>
                            <div className='event-page-top'>
                                <div className='event-page-title'>
                                    새 페이지1
                                </div>
                                <div className='event-page-button'>
                                    <img src='images/paint.png' alt='paint' />
                                    <img src='images/delete.png' alt='delete' />
                                </div>
                            </div>
                            <div className='event-page-body'>
                                <div className='event-page-area'></div>
                            </div>
                            <div className='event-page-bottom'>
                                <div><img src='images/downArrow.png' alt='down' /></div>
                                <div><img src='images/add.png' alt='add' /></div>
                                <div><img src='images/upArrow.png' alt='up' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event