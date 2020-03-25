import VideoCapture from '../../src/index'

// 初始化文件上传
let dom = document.getElementById('inputFile')
const change = async function(error,file) {
  if(error) {
    console.log(error.message)
  }else {
    let src = await videoCapture.capture(file,10000) // 获取截取的照片
    // const img =new Image()
    // img.src = src
    // document.getElementById('img').appendChild(img)
  }
}
const options = {
  accept: 'video/mp4', // 支持的视频格式
  duration: 50,         // 视频时长
  size: 1024*15*1024,         // 视频文件的大小
  change: change,
}
const videoCapture = new VideoCapture(dom,options)

videoCapture.init()