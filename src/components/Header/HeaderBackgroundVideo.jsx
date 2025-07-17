import backgroundVideo from "../../assets/backgroundVideo.mp4";

export default function HeaderBackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="top-0 left-0 z-[-1] absolute w-full h-full object-cover"
      aria-hidden="true"
      role="presentation"
    >
      <source src={backgroundVideo} type="video/mp4" />
      Il tuo browser non supporta i video HTML5
    </video>
  );
}
