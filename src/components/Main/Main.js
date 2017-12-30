import React, {Component} from 'react'
import Video from '../Video/Video'
import Modal from 'react-modal'
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    // this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  handleModalPlay(id){
    this.props.handleModalPlay(id)
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
              // onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel='Example Modal'>
                <h2>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
            </Modal>
        </div>
      </div>
    )
  }
}
