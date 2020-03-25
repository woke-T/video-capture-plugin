const capture = function (file, time) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const url = URL.createObjectURL(file)
    const video = document.createElement('video')
    video.setAttribute("crossOrigin",'Anonymous')
    video.setAttribute('src', url)
    video.addEventListener('loadedmetadata', function (e) {
      if(time > this.duration) {
        reject(new Error('over video duration'))
      }
      this.currentTime = time
    })
    video.addEventListener('timeupdate', function (e) {
      if (this.readyState >= 3) {
        canvas.width = this.videoWidth
        canvas.height = this.videoHeight
        const width = this.videoWidth
        const height = this.videoHeight
        ctx.drawImage(this, 0, 0, width, height)
        const src = canvas.toDataURL('image/jpeg')
        resolve(src)
      }
    })
    video.addEventListener('onerror', function (e) {
      reject(e)
    })
  })



}

export default capture