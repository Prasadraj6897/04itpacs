import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import axios from 'axios'
import { 
  MDBFileInput,
  MDBBtn
} from 'mdbreact';

 
class MyEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: 'avatar.jpg',
	    allowZoomOut: false,
	    position: { x: 0.5, y: 0.5 },
	    scale: 1,
	    rotate: 0,
	    borderRadius: 0,
	    width: 100,
  		height: 100,
  		random: 0,
  		imageUrl: null,
      imgValid: true,
      imgSelected: false,
    }
    this.handleScale = this.handleScale.bind(this)
  }
  
  handleNewImage = e => {
    const filename = e[0].name
    let fileExt = filename.split('.').pop();
    fileExt = fileExt.toLowerCase()
    if(filename != "" && (fileExt == "png" || fileExt == "jpg" || fileExt == "jpeg" || fileExt == "gif"))
      this.setState({ 
        image: e[0],
        imgValid: true,
        imgSelected: true
      })
    else
      this.setState({
        imgValid: false,
        imgSelected: false
      })
  }

  handleSave = data => {

    const imgBorder = this.state.borderRadius
    const prevImage = this.props.previousProfileImg
    const filename = prevImage.split('/').pop();
    const img = this.editor.getImageScaledToCanvas().toDataURL()
    const spl = img.split("base64,")

    var contentType = 'image/png';
    var b64Data = spl[1]
    const type = img.split(';')[0].split('/')[1]

    if(this.state.imgSelected == false)
      this.setState({
        imgValid: false
      })
    else
      axios({
        url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/uploadImageToS3`,
        method: 'POST',
        data:{imageData:b64Data, imageType:type, imageBorder:imgBorder, previousImg:prevImage, fileName:filename},
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.authToken}`
          }
      }).then((response) => {
          this.setState({imageUrl: response.data.url})
          this.props.sendToggleFunction()
      })
      console.log(filename)
  }

  handleScale = e => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    this.setState({ allowZoomOut })
  }

  rotateLeft = e => {
    e.preventDefault()

    this.setState({
      rotate: this.state.rotate - 90,
    })
  }

  rotateRight = e => {
    e.preventDefault()
    this.setState({
      rotate: this.state.rotate + 90,
    })
  }

  handleBorderRadius = e => {
    const borderRad = parseInt(e.target.value)
    this.setState({ borderRadius: borderRad })
  }

  handleXPosition = e => {
    const x = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, x } })
  }

  handleYPosition = e => {
    const y = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, y } })
  }

  handleWidth = e => {
    const width = parseInt(e.target.value)
    this.setState({ width })
  }

  handleHeight = e => {
    const height = parseInt(e.target.value)
    this.setState({ height })
  }

  logCallback(e) {
    // eslint-disable-next-line
    console.log('callback', e)
  }

  setEditorRef = editor => {
    if (editor) this.editor = editor
  }

  handlePositionChange = position => {
    this.setState({ position })
  }

  handleDrop = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] })
  }

  render () {
    return (
      <div className="image-editor-container">
      
          <div>
            <AvatarEditor
              ref={this.setEditorRef}
              scale={parseFloat(this.state.scale)}
              width={this.state.width}
              height={this.state.height}
              position={this.state.position}
              onPositionChange={this.handlePositionChange}
              rotate={parseFloat(this.state.rotate)}
              borderRadius={this.state.width / (100 / this.state.borderRadius)}
              onLoadFailure={this.logCallback.bind(this, 'onLoadFailed')}
              onLoadSuccess={this.logCallback.bind(this, 'onLoadSuccess')}
              onImageReady={this.logCallback.bind(this, 'onImageReady')}
              image={this.state.image}
              className="editor-canvas"
            />
            <br />
            {!this.state.imgValid &&
              <span class="errorMsg">Uploaded file is not a valid image. Only JPG, PNG and GIF files are allowed.</span>
            }
          </div>

        <MDBFileInput id="fileUploadId" getValue={this.handleNewImage} btnColor="info" btn-size="sm" />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? '0.1' : '1'}
          max="4"
          step="0.01"
          defaultValue="1"
        />
        
        <br />
        Border radius:
        <input
          name="scale"
          type="range"
          onChange={this.handleBorderRadius}
          min="0"
          max="50"
          step="1"
          defaultValue="0"
        />
        <br />
        Rotate:
        <MDBBtn rounded size="sm" onClick={this.rotateLeft}>Left</MDBBtn>
        <MDBBtn rounded size="sm" onClick={this.rotateRight}>Right</MDBBtn>
        <br />
        <hr />
        <MDBBtn color="success" onClick={this.handleSave} rounded size="sm">Upload</MDBBtn>
        <MDBBtn color="danger" onClick={this.props.sendToggleFunction} rounded size="sm">Close</MDBBtn>
        <br />
      </div>
    )
  }
}
 
export default MyEditor