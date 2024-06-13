import React, { Suspense, useEffect } from 'react'
import VehicleTypes from '../../components/Main Page/VehicleTypes/VehicleTypes'
import Landing from '../../components/Main Page/Landing/Landing'
import MostPopular from '../../components/Main Page/Most Popular/MostPopular'

// Lazy Loaded Component
const LazyLocation = React.lazy(() =>
  import('../../components/Main Page/Locations/Locations')
)
const LazyRecommended = React.lazy(() =>
  import('../../components/Main Page/Recommended/Recommended')
)
const LazyFeatures = React.lazy(() =>
  import('../../components/Main Page/Features/Features')
)
const LazyDocuments = React.lazy(() =>
  import('../../components/Main Page/Documents/Documents')
)
const LazyTopBrands = React.lazy(() =>
  import('../../components/Main Page/Top Brands/TopBrands')
)
const LazyLatest = React.lazy(() =>
  import('../../components/Main Page/Latest/Latest')
)
const LazyAffordable = React.lazy(() =>
  import('../../components/Main Page/Affordable/Affordable')
)
const LazyNewlyArrived = React.lazy(() =>
  import('../../components/Main Page/Newly Arrived/NewlyArrived')
)
const LazyWhyOpt = React.lazy(() =>
  import('../../components/Common/Why Opt/WhyOpt')
)
const LazyFAQ = React.lazy(() => import('../../components/Common/FAQ/FAQ'))

// carousel import for main page
import { swiffyslider } from 'swiffy-slider'
import 'swiffy-slider/css'
import LazyLoad from '../../components/Skelton/Lazy Load/LazyLoad'

const MainPage = () => {
  useEffect(() => {
    window.swiffyslider = swiffyslider
    window.addEventListener('load', () => {
      window.swiffyslider.init()
    })
  }, [])

  return (
    <>
      <Landing />
      <VehicleTypes />
      <MostPopular />

      <Suspense fallback={<LazyLoad />}>
        <LazyLocation />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyRecommended />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyFeatures />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyDocuments />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyTopBrands />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyLatest />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyAffordable />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyNewlyArrived />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyWhyOpt />
      </Suspense>
      <Suspense fallback={<LazyLoad />}>
        <LazyFAQ />
      </Suspense>
    </>
  )
}

export default MainPage
