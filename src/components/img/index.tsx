const Img: React.FC<ImgProps> = ({ src, className, alt = '' }) => {
  return <img src={src} className={`img ${className}`} alt={alt} />
}

export default Img;