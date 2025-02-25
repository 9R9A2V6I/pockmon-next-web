import React from 'react'

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center  w-screen h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-4 border-gradient-to-r from-blue-400 to-purple-500"></div>
    </div>
  )
}

export default LoadingSpinner
