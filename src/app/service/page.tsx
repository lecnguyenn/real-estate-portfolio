import Tabs from "@/components/base/Tabs";
import TabItem from "@/components/base/Tabs/TabItem";
import BreadCrumb from "@/components/BreadCrumb"
import PhotoEditting from "@/components/PhotoEditting";

const Service = () => {
  return (
    <>
      <BreadCrumb name="Service" title="OutStanding Service" /><div className="relative container mt-16px mx-auto px-3">
        <div className="container text-center mx-auto mt-16 px-3">
          <div className="mb-[100px]">
            <p>Welcome to <b className="text-[#efb93f]">NewDay</b>
              , where we bring your special moments to life through our top-notch photo booth service.
            </p>
            <span>
              We understand the importance of capturing memories that will last a lifetime. Our cutting-edge photo booth technology ensures that every smile, every laugh,
              and every silly pose is captured in stunning detail.
            </span>
          </div>
          <div>
            <Tabs>
              <TabItem title="Photo Editting">
                <PhotoEditting />
              </TabItem>
              <TabItem title="Video Editing">List video</TabItem>
              <TabItem title="Virtual Staging">List photo</TabItem>
              <TabItem title="Virtual Renovation">List photo</TabItem>
              <TabItem title="360 Virtual staging">List photo</TabItem>
              <TabItem title="Floor Plan">List photo</TabItem>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;