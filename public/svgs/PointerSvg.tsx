"use client"
import { slideUpAnimation } from '@/utils'
import anime from 'animejs'
import React, { useCallback, useEffect, useRef } from 'react'

interface IPointerSvgProps {
  className?: string
}

export const PointerSvg: React.FC<IPointerSvgProps> = ({ className }) => {
  const pathRefs = useRef<SVGPathElement[]>([])
  const svgRef = useRef<SVGSVGElement>(null)

  const handleAnimateSvg = useCallback(() => {
    const paths = pathRefs.current

    anime({
      targets: svgRef.current,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1200
    })

    paths.forEach((path, index) => {
      path.style.strokeDasharray = path.getTotalLength() + 'px'
      path.style.strokeDashoffset = path.getTotalLength() + 'px'

      anime({
        targets: path,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuad",
        duration: 1500 - index * 300,
        delay: 400 * index,
      })
    })
  }, [])

  useEffect(() => {
    if (svgRef.current) {
      slideUpAnimation(svgRef.current, handleAnimateSvg)
    }
  }, [handleAnimateSvg])
  
  return (
    <svg
      className={className}
      version="1.1"
      id="svg1"
      width={280}
      height={220}
      viewBox="0 0 579.20001 518.40002"
      ref={svgRef}
      style={{opacity: 0}}
    >
      <defs
        id="defs1"
      />
      <g
        id="g1"
      >
        <path
          fill='none'
          d="M 135.69302,282.584 372.82645,130.42339"
          id="path1"
        />
        <image
          width={280}
          height={220}
          preserveAspectRatio="none"
          id="use8"
          fill='none'
          strokeWidth={3.6}
          strokeDasharray='none'
          x="0"
          y="0"
        />
        <path
          ref={(path: SVGPathElement) => pathRefs.current[0] = path}
          fill='none'
          stroke='#ffffff'
          strokeWidth={3.4}
          strokeDasharray='none'
          strokeOpacity={1}
          d="m 48.744094,117.24931 c 12.732269,-1.08349 25.809458,2.48302 36.228718,9.88056 11.479561,8.15034 19.328878,20.34635 26.645488,32.37447 7.31662,12.02811 14.60151,24.45319 25.39213,33.49592 8.92932,7.48293 19.87634,12.27217 31.15205,15.20223 11.2757,2.93007 22.93216,4.08008 34.55178,4.92352 23.23923,1.68688 47.49161,2.43289 68.01307,13.46816 9.84853,5.29597 18.73118,13.22402 22.83249,23.62691 2.05065,5.20144 2.83922,10.94039 1.93708,16.45821 -0.90215,5.51782 -3.53975,10.78976 -7.64327,14.58731 -2.53218,2.34337 -5.62441,4.1213 -8.98597,4.89802 -3.36155,0.77672 -6.9919,0.51727 -10.11644,-0.9458 -4.12637,-1.93218 -7.13043,-5.86325 -8.48535,-10.21346 -1.35493,-4.35022 -1.17152,-9.07676 -0.0778,-13.49988 1.74728,-7.06619 5.80724,-13.51258 11.30519,-18.28296 5.49796,-4.77039 12.39675,-7.86692 19.5886,-8.99004 7.19185,-1.12312 14.65606,-0.29143 21.49164,2.21037 6.83557,2.5018 13.03838,6.65351 18.09589,11.88855 8.91238,9.22522 14.01867,21.35238 20.24609,32.56641 3.11371,5.60701 6.56952,11.07056 10.90274,15.79888 4.33322,4.72832 9.59529,8.71651 15.61915,10.91806 9.11118,3.32988 19.1426,2.37091 28.81921,1.68907 4.83831,-0.34093 9.70161,-0.601 14.53447,-0.19 4.83286,0.411 9.65975,1.51479 13.95357,3.77057 5.53054,2.9055 9.911,7.55862 14.08034,12.21108 4.16934,4.65246 8.31824,9.45998 13.58523,12.81967 4.8291,3.08037 10.37769,4.80091 15.84359,6.51342 5.46591,1.71252 11.00451,3.48908 15.7742,6.66066 6.45786,4.29412 11.06446,10.85813 14.79561,17.65681 3.73116,6.79867 6.75013,13.99263 10.89384,20.54802 3.92317,6.2065 8.83415,11.78716 14.49149,16.46759"
          id="path13"
          transform="translate(-34.91131,-69.163917)"
        />
        <path
          ref={(path: SVGPathElement) => (pathRefs.current[1] = path)}
          fill='none'
          stroke='#ffffff'
          strokeWidth={3.4}
          strokeDasharray='none'
          strokeOpacity={1}
          d="m 447.26,358.99367 c 61.4967,53.70735 60.1364,64.41644 68.50521,54.01372 34.88645,-33.37001 33.96772,-71.80458 29.64168,-81.02059"
          id="path16"
        />
        <path
          ref={(path: SVGPathElement) => (pathRefs.current[2] = path)}
          fill='none'
          stroke='#ffffff'
          strokeWidth={3.4}
          strokeDasharray='none'
          strokeOpacity={1}
          d="m 449.23611,360.96977 c -15.40151,-12.96509 66.09088,-28.76615 94.85337,-30.30038 l 2.63482,1.97611"
          id="path17"
        />
        <path
          ref={(path: SVGPathElement) => (pathRefs.current[3] = path)}
          fill='none'
          stroke='#ffffff'
          strokeWidth={3.4}
          strokeDasharray='none'
          strokeOpacity={1}
          d="m 463.72759,355.04144 c 11.35699,-1.34996 28.7682,0 40.18095,0 77.16363,0 -51.59637,7.68427 -3.95222,-5.92834 4.37805,-1.25087 33.38611,-13.45538 36.22871,-7.90445 4.08201,7.9712 -94.6402,25.95404 -67.1878,22.39594 11.19301,-1.45072 46.06955,-9.26159 53.35502,-1.97611 1.50168,1.50168 -53.12156,13.17407 -28.98297,13.17407 6.11174,0 44.59173,-2.4088 20.41982,3.95223 -0.87056,0.22909 -16.06347,6.10835 -15.15019,6.58704 4.16862,2.18498 30.62387,-2.05512 11.85667,12.51537 -0.16517,0.12824 2.21695,4.43391 2.63481,5.26964"
          id="path18"
        />
      </g>
    </svg>
  )
}