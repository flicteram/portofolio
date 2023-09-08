import { useInView } from 'react-hook-inview'


export default function AboutParagraph({text}){
  const [ref, inView] = useInView({unobserveOnEnter:true,threshold:1})
  const inViewStyle = inView?{transform:'rotateY(0deg)'}:{transform: 'rotateY(-90deg)'};

  return (
    <p ref={ref} style={inViewStyle}>{text}</p>
  )
}