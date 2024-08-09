export default function VideoSection({ src }: { src: string }) {
  return (
    <iframe
      className='w-[100%] aspect-video'
      src={src}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
}
