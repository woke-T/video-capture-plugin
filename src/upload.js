const init = function () {
  const { accept = '', size, change, duration } = this.options

  const wrap = document.createElement('div')
  const inputFile = document.createElement('input')
  wrap.classList.add('input-file-wrap')
  inputFile.setAttribute("type", "file")
  inputFile.setAttribute('accept', accept)
  wrap.appendChild(inputFile)
  this.dom.appendChild(wrap)

  this.dom.addEventListener('change',async (e)=> {
    const file = e.target.files[0]
    if (e.target.files.length) {
      try {
        await checkFile(file,size,duration)
        change(null,file)
      } catch (e) {
        inputFile.value = null
        change(e,null)
      }
    } else {
      change()
    }
  })
}


const checkFile = function (file,size,duration) {
  const url = URL.createObjectURL(file)
  const video = document.createElement('video')
  video.setAttribute('src', url)

  return new Promise((resolve, reject) => {
    if (size && file.size > size) {
      reject(new Error('Size limit exceeded '))
    }
    video.onloadedmetadata = e => {
      if (duration && video.duration > duration) {
        reject(new Error('Time limit exceeded'))
      } else {
        resolve()
      }
    }
  })
}



export default init