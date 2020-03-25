## video-capture-plugin plugin
this is a video plugin for upload and ccapture 

## How to use?

```sh
npm install video-capture-plugin --save

```

```sh
import downloadImg from 'video-capture-plugin'

const videoCapture = new VideoCapture(dom,options)

配置：
const options = {
  accept: 'video/mp4', // 支持的视频格式
  duration: 50,         // 视频时长
  size: 1024*15*1024,         // 视频文件的大小
  change: change,  // 文件上传时候的回调
}

videoCapture.init()

const src = videoCapture.capture(file,time)

配置：
file: 视频文件，可以通过change回调获取
time: 需要截取的时刻

```
