import React, {Component} from 'react'
import Video from '../Video/Video'
import Modal from 'react-modal'
import Iframe from 'react-iframe'
import User from '../User/User'
import './Main.css'

export default class Main extends Component {
  constructor(props) {
    super(props);
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


  handleModalPlay(id) {
    this.setState({vid_id: id})
    this.openModal()
  }

  handleUsers() {
    console.log('handleUsers')
    return this.props.users.map((user, i) => {
      return <User key={user.name} user={user} addFriend={this.props.addFriend}
                   friendReqs={this.props.friendReqs}/>
    })
  }

  handleVideos() {
    return this.props.videos.map((video,index) => {
      return (<Video videoId={this.handleModalPlay.bind(this)}
                key={video.id} {...video} />)
    })
  }

  handleVidsOrUsers(){
    if(this.props.videos.length === 0){
      return this.handleUsers()
    }else{
      return this.handleVideos()
    }
  }

  render(){
    return(
      <div className='main-body'>
        <div className='cards'>
          {this.handleVidsOrUsers()}
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
