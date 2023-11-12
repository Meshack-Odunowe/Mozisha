import growth from "../../assets/growth .jpg";
import study from "../../assets/study.avif";
import visible from "../../assets/visible.avif";
export default function Mentees() {
  return (
    <div>
      <div className="flex items-center flex-col md:grid md:grid-cols-2 px-4 justify-between gap-16 mb-16">
        <div className="rounded-md">
          <img src={growth} alt="" />
        </div>
        <div>
          <div>
            <p className=" text-2xl font-bold">
              Achieve a tenfold boost in your career growth through guidance
              from renowned mentors.
            </p>
            <p className=" text-sm leading-8 mt-4">
              Whether you seek advice, collaboration, or networking
              opportunities, Mozisha allows you to effortlessly arrange
              one-on-one mentorship sessions in innovative and enjoyable
              formats, enabling direct collaboration with mentors.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col  flex-col-reverse items-center md:grid md:grid-cols-2 px-4 justify-between gap-16 mb-16">
        <div>
          <div>
            <p className=" text-2xl font-bold">
            Accelerate your journey to acquire fresh knowledge and expand your network.
            </p>
            <p className=" text-sm leading-8 mt-4">
            If you are in search of advice, collaboration, or networking possibilities, Mozisha provides a seamless platform for organizing one-on-one mentorship sessions in creative and enjoyable formats, facilitating direct collaboration with mentors.
            </p>
          </div>
        </div>
        <div className="rounded-md">
          <img src={study} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 px-4 justify-between gap-16 mb-16 items-center">
        <div className="rounded-md">
          <img src={visible} alt="" />
        </div>
        <div>
          <div>
            <p className=" text-2xl font-bold">
            Increase your visibility and get discovered as a talented individual.
            </p>
            <p className=" text-sm leading-8 mt-4">
            Unemployed but not disconnected. With Mozisha, you can showcase yourself as a skilled individual within the community and receive endorsements from mentors, enhancing your credentials for a swift hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
