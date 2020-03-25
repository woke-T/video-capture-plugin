import init from './upload'
import capture from './capture'



function VideoCapture(dom,options) {
  this.dom = dom
  this.options = options
}
VideoCapture.prototype.init = init
VideoCapture.prototype.capture = capture



export default VideoCapture