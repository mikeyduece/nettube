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


  handleModalPlay(id){
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
          <button onClick={this.openModal}>Open Modal</button>
            <Modal
              className='modal'
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel='Example Modal'>
              <iframe id='my-video' className='iframe-modal' src={'https://youtube.com/embed/' + this.state.vid_id + '?rel=0&enablejsapi=1" allowFullScreen frameborder="0"'}></iframe>

            </Modal>
        </div>
      </div>
    )
  }
}
