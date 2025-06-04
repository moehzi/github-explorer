import React from 'react'



const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='px-4'>
      {children}
    </div>
  )
}

export default MainLayout
