import React, {Component} from 'react'
import Video from '../Video/Video'
import Modal from 'react-modal'
import Iframe from 'react-iframe'
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      vid_id: null,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleModalPlay = (id) => {
    this.state.vid_id = id
    this.openModal()
  }

  render(){
    return(
      <div className='main-body'>
        <div className='cards'>
          {this.props.videos.map((video,index) => {
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
                      allowFullScreen/>

            </Modal>
        </div>
      </div>
    )
  }
}
