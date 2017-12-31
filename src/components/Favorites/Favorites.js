import React, {Component} from 'react'
import Video from '../Video/Video'
import Modal from 'react-modal'
import Iframe from 'react-iframe'

export default class Favorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      favorites: [],
      vid_id: null,
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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


  componentWillMount(){
    Modal.setAppElement('body')
    let email = JSON.parse(localStorage.userData).email
    fetch('http://localhost:3000/api/v1/users/' + email + '/favorites')
    .then(response => response.json())
    .then(data => {
      this.setState({favorites: data})
    })
  }

  render() {
    return(
      <div className='favorite-body'>
        <div className='cards'>
          {this.state.favorites.map((video,index) => {
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

