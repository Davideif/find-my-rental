import React from 'react'
import { ClipLoader } from "react-spinners";


const LoadingPage = () => {
  return (
     <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default LoadingPage