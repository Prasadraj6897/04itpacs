import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import Preview from './Preview.jsx'
import axios from 'axios'
import AWS from'aws-sdk'
import { 
  MDBFileInput,
  MDBBtn
} from 'mdbreact';

AWS.config.update({ accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY, secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY});

const s3 = new AWS.S3();

 
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
	    preview: null,
	    width: 100,
  		height: 100,
  		random: 0,
  		imageUrl: null,
      imgValid: true,
    }
    this.handleScale = this.handleScale.bind(this)
    this.insertImageLocation = this.insertImageLocation.bind(this)
  }
  
  handleNewImage = e => {
    const filename = e[0].name
    let fileExt = filename.split('.').pop();
    fileExt = fileExt.toLowerCase()
    if(fileExt == "png" || fileExt == "jpg" || fileExt == "jpeg" || fileExt == "gif")
      this.setState({ 
        image: e[0],
        imgValid: true
      })
    else
      this.setState({
        imgValid: false
      })
  }

  handleSave = data => {

    if (this.state.imgValid == true){
      const img = this.editor.getImageScaledToCanvas().toDataURL()
      const rect = this.editor.getCroppingRect()

      /*this.setState({
        preview: {
          img,
          rect,
          scale: this.state.scale,
          width: this.state.width,
          height: this.state.height,
          borderRadius: this.state.borderRadius,
        },
      })*/
      const base64 = img
    	const base64Data = new Buffer(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    	const type = base64.split(';')[0].split('/')[1]
    	const randFilename = Math.random().toString(36).substring(7);

    	const params = {
    		Bucket: process.env.REACT_APP_S3_BUCKET,
    		Key: `${randFilename}.${type}`, // type is not required
    		Body: base64Data,
    		ACL: 'public-read',
    		ContentEncoding: 'base64', // required
    		ContentType: `image/${type}` // required. Notice the back ticks
    	}

    	console.log(params)
    	s3.upload(params, (err, data) => {
    	  if (err) { return console.log(err) }
    		this.setState({imageUrl: data.Location})
    		this.insertImageLocation()
    	});
    }
  }

  insertImageLocation = e => {
  	const imgUrl = this.state.imageUrl
    const imgBorder = this.state.borderRadius
  	axios({
  	  url: `${process.env.REACT_APP_USERS_SERVICE_URL}/users/uploads`,
  	  method: 'POST',
  	  data:{img:imgUrl, imgBorder:imgBorder},
  	  headers:{
  	      'Content-Type': 'application/json',
  	      Authorization: `Bearer ${window.localStorage.authToken}`
  	    }
  	}).then((res)=>{
      if (res.data.message === 'Updated')
        /*here remove previous image file from S3*/
        this.deletePreviousProfileImageS3()

      this.props.sendToggleFunction()
    })
  }

  deletePreviousProfileImageS3 = e => {

    const filename = this.props.previousProfileImg
    const file = filename.split('/').pop();
    var params1 = {
      Bucket: process.env.REACT_APP_S3_BUCKET,
      Key: file
      /* where value for 'Key' equals 'pathName1/pathName2/.../pathNameN/fileName.ext' - full path name to your file without '/' at the beginning */
    };

    s3.deleteObject(params1, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data); // successful response
    });
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
        
        Rotate:
        <MDBBtn rounded size="sm" onClick={this.rotateLeft}>Left</MDBBtn>
        <MDBBtn rounded size="sm" onClick={this.rotateRight}>Right</MDBBtn>
        <br />
        <hr />
        <MDBBtn color="success" onClick={this.handleSave} rounded size="sm">Upload</MDBBtn>
        <MDBBtn color="danger" onClick={this.props.sendToggleFunction} rounded size="sm">Close</MDBBtn>
        <br />
        {!!this.state.preview && (
          <img
            src={this.state.preview.img}
            style={{
              borderRadius: `${(Math.min(
                this.state.preview.height,
                this.state.preview.width
              ) +
                10) *
                (this.state.preview.borderRadius / 2 / 100)}px`,
            }}
          />
        )}
        {!!this.state.preview && (
          <Preview
            width={
              this.state.preview.scale < 1
                ? this.state.preview.width
                : this.state.preview.height * 478 / 270
            }
            height={this.state.preview.height}
            image="avatar.jpg"
            rect={this.state.preview.rect}
          />
		)}
      </div>
    )
  }
}
 
export default MyEditor