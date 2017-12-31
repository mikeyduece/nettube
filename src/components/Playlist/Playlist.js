import React, { Component } from 'react';
import Video from '../Video/Video'
import Modal from 'react-modal'
import Iframe from 'react-iframe'
import _ from 'lodash'

export default class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      listVids: [],
      vid_id: null,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    Modal.setAppElement('body')
    let email = JSON.parse(localStorage.userData).email
    const name  = this.props.location.state.listName[0]
    fetch('http://localhost:3000/api/v1/users/' + email + '/playlists/' + name)
    .then(response => response.json())
    .then(data => {
      let videos = Object.values(data)
      this.setState({listVids: _.flatten(videos)})
      console.log(this.state.listVids)
    })
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleModalPlay = (id) => {
    this.setState({vid_id: id})
    this.openModal()
  }



  render() {
    return(
      <div className='playlist-body'>
        <div className='cards'>
          {this.state.listVids.map((video,index) => {
            return <Video videoId={this.handleModalPlay.bind(this)}
            key={index} {...video} />
          })}
        </div>
        <div>
            <Modal
              className='modal'
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel='Example Modal'>
              <i className='fa fa-times' onClick={this.closeModal}></i>
              <Iframe url={"https://youtube.com/embed/" + this.state.vid_id + '?rel=0&enablejsapi=1" frameborder="0"'}
                      className='iframe-modal'
                      width='100%'
                      height='100%'
                      allowFullScreen/>

            </Modal>
        </div>
      </div>
    )
  }
}

