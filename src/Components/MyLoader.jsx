import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={85}
    viewBox="0 0 300 85"
    backgroundColor="#f0e5e5"
    foregroundColor="#d1cccc"
    {...props}
  >
    <rect x="77" y="0" rx="12" ry="12" width="174" height="22" /> 
    <circle cx="61" cy="114" r="10" /> 
    <circle cx="61" cy="42" r="10" /> 
    <circle cx="60" cy="11" r="10" /> 
    <rect x="77" y="31" rx="12" ry="12" width="174" height="22" /> 
    <rect x="82" y="103" rx="12" ry="12" width="174" height="22" /> 
    <circle cx="62" cy="74" r="10" /> 
    <rect x="79" y="63" rx="12" ry="12" width="174" height="22" />
  </ContentLoader>
)

export default MyLoader

