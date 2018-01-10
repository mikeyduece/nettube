import React, {Component} from 'react'
import Video from '../Video/Video'
import Modal from 'react-modal'
import SideBar from '../SideBar/SideBar'
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

  findVideo(id) {
    let found = {}
    this.state.favorites.find((video) => {
	    if(video.vid_id === id){
        found = video
      }
    })
    return found
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true
    }
  }

  removeFav(e) {
    let email = JSON.parse(localStorage.userData).email
    let vid   = e.target.id
    let name  = e.target.parentElement.firstElementChild.innerHTML
    let video = this.findVideo(vid)
    fetch('http://localhost:3000/api/v1/users/' + email + '/favorites/' + vid, {
      method: 'DELETE',
    })
    .then(() => {
      let i = this.state.favorites.indexOf(video)
      this.state.favorites.splice(i, 1)
      this.setState({favorites: this.state.favorites})
      alert(`You have removed ${name} from your favorites.`)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return(
      <div className='favorite-body'>
        <div className='cards'>
          {this.state.favorites.map((video,index) => {
            return <Video path={this.props.match.path}
                     videoId={this.handleModalPlay.bind(this)}
                     removeFav={this.removeFav.bind(this)}
                     key={index} {...video}
                   />
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

