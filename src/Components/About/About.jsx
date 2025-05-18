import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
        mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold ">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
          <img className="md:h-80" src={AboutImg} />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in developing complete web applications from frontend
                  to backend using technologies like React, Node.js, and more.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  PHP Laravel Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in building robust backend systems using PHP and
                  Laravel, focusing on RESTful APIs and database management.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  React Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in developing responsive and interactive user
                  interfaces using React, Redux, and modern frontend libraries.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
