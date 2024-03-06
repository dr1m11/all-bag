import React from "react"
import ContentLoader from "react-content-loader"

const SingleProductSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={251}
        height={500}
        viewBox="0 0 251 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="251" height="351" />
        <rect x="0" y="367" rx="0" ry="0" width="251" height="36" />
        <rect x="0" y="419" rx="0" ry="0" width="150" height="19" />
    </ContentLoader>
)

export default SingleProductSkeleton