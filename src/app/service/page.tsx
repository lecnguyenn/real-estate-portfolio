"use client"
import Link from "next/link";

import Tabs from "@/components/base/Tabs";
import TabItem from "@/components/base/Tabs/TabItem";
import BreadCrumb from "@/components/BreadCrumb"
import DayToDusk from "@/components/DayToDusk";
import FloorPlan from "@/components/FloorPlan";
import ItemRemoval from "@/components/ItemRemoval";
import PanoramaStitching from "@/components/PanoramaStitching";
import PhotoEditting from "@/components/PhotoEditting";
import PortraiRetouching from "@/components/PortraitRetouching";
import VideoStaging from "@/components/VideoStaging";
import VirtualStaging from "@/components/VirtualStaging";
import { dataFloorImages } from "@/const/floor";
import { dataPortraitImages } from "@/const/portrait"
import { dataVirtualImages } from "@/const/virtual-editting";

const Service = () => {
  return (
    <>
      <BreadCrumb name="Service" title="OutStanding Service" /><div className="relative container mt-16px mx-auto px-3">
        <div className="container text-center mx-auto mt-16 px-3">
          <div className="mb-[80px]">
            <p><b className="text-[#efb93f]">NewDay</b> is a real estate photo editing team based in Vietnam. We offer photographers a comprehensive suite of services, including Image Enhancement, day-to-dusk conversions, Twilight edits, Virtual Staging, and Floor Plans.
              Our goal is to help photographers save time and grow their businesses by providing High-Quality Photo and Video Editing Services and professional services.
            </p>
            <span className="mb-12">You have an order and don’t have time to edit everything by yourself, we are always ready to help.
              <Link href="/contact">
                <p><b className="text-[#efb93f]">Place Order</b></p>
              </Link>
            </span>
            <span>
              Our samples are available in the Outstanding Service. We welcome your feedback and encourage you to contact us today for a free trial.
            </span>
          </div>
          <div>
            <Tabs>
              <TabItem title="Photo Editting">
                <PhotoEditting />
              </TabItem>
              <TabItem title="Virtual Staging">
                <VirtualStaging />
              </TabItem>
              <TabItem title="Real Estate Video Editing">
                <VideoStaging />
              </TabItem>
              <TabItem title="Day To Dusk ">
                <DayToDusk />
              </TabItem>
              <TabItem title="Item Removal">
                <ItemRemoval />
              </TabItem>
              <TabItem title="Panorama Stitching">
                <PanoramaStitching data={dataVirtualImages} className="md:grid-cols-4" />
              </TabItem>
              <TabItem title="Portrait Retouching">
                <PortraiRetouching data={dataPortraitImages} />
              </TabItem>
              <TabItem title="Floor Plan">
                <FloorPlan data={dataFloorImages} />
              </TabItem>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;