import { Suspense } from "react";

export default function withSuspense(Component){
  return(...props)=>(
    <Suspense fallback={<CustomLoader/>}>
      <Component {...props}/>
    </Suspense>
  )
}

const CustomLoader = () => (
  <div style={{height:"100vh", margin:"-100px 0", display:'flex', justifyContent:'center'}}>
    <span className='logoLoading'>{'<alexdev/>'}</span>
  </div>
)