import { forwardRef, useImperativeHandle, useRef } from "react"

interface VideoPlayerIntercafe {
  play: ()=>void,
  pause: ()=>void
}

export const VideoPlayer = forwardRef((_props, ref)=>{
    const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, ()=>({
    play: ()=>{
      if (videoRef.current){
        videoRef.current.play();
      }
    },
    pause: ()=>{
      if(videoRef.current){
        videoRef.current.pause();
      }
    }
  }))

  return (
  <div>
    <video ref={videoRef} width="400" controls>
      <source
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      type="video/mp4" 
      />
      Your browser does not support HTML5 video.
    </video>
  </div>
  )
})

export const CustomVideoPlayer = ()=>{
  const videoRef = useRef<VideoPlayerIntercafe>(null);

  return(
    <div>
      <h2>Video Control with forwardRef</h2>
      <VideoPlayer ref={videoRef} />
      <button onClick={()=> videoRef.current?.play()}>Play</button>
      <button onClick={()=> videoRef.current?.pause()}>Pause</button>
    </div>
  )
}