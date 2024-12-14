import { GoogleMapsEmbed } from "@next/third-parties/google"
import { memo, useMemo } from "react"

const Map = memo(() => {
  const mapProps = useMemo(() => ({
    apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
    height: 500,
    width: "100%",
    mode: "place",
    q: "354A Đ. Lê Duẩn, Phương Liên, Đống Đa, Hà Nội"
  }), [])
  return <GoogleMapsEmbed {...mapProps} mode="place" />
})
Map.displayName = 'MapComponent';
export default Map;