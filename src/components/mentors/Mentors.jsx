import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Details from "./Details";
import office from "../../assets/office.avif";
import mentees from "../../assets/mentees.avif";
import Mentees from "./Mentees";
function Mentors() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="px-8 max-w-[1200px] mx-auto mt-12">
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}>
        <TabList className={`flex justify-center md:justify-start`}>
          <Tab>
            <span
              className={`bg-${
                selectedTab === 0 ? "purple-700" : "white"
              } text-${
                selectedTab === 0 ? "white" : "black"
              } px-12 rounded-md py-2 font-bold`}>
              Mentor
            </span>
          </Tab>
          <Tab>
            <span
              className={`bg-${
                selectedTab === 1 ? "purple-700" : "white"
              } text-${
                selectedTab === 1 ? "white" : "black"
              } px-12 rounded-md py-2 font-bold`}>
              Mentee
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col md:flex-row mt-8  gap-8 items-center">
            <div className="">
              <h1 className="my-8 text-3xl md:text-4xl font-bold">
                Forge your next chapter while engaging in mentoring
              </h1>
              <p className=" leading-8 mb-8">
                Cultivate leadership confidence, expand your professional
                network, and carve out your lasting legacy.
              </p>
              <button className="bg-purple-700 text-white rounded-md px-6 py-2 mb-8 hover:bg-white hover:text-purple-700 hover:font-bold">
                Become a Mentor
              </button>
            </div>
            <div className="bg-purple-500 h-full ">
              <img src={office} alt="" />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col md:flex-row mt-8  gap-8 items-center h-full">
            <div className="md:w-1/2">
              <h1 className="my-8 text-3xl md:text-4xl font-bold">
                Acquire knowledge and advance your skills with the guidance of
                esteemed mentors at no cost.
              </h1>
              {/* Add your Mentees-specific content here */}
              <p className=" leading-8 mb-8">
                Connect with a vast network of mentors for personalized
                one-on-one mentorship within our global community.
              </p>
              <button className="bg-purple-700 text-white rounded-md px-6 py-2 mb-8 hover:bg-white hover:text-purple-700 hover:font-bold">
                Become a Mentee
              </button>
            </div>
            <div className="bg-purple-500 h-full md:w-1/2 ">
              <img src={mentees} alt="" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <Details />
      <Mentees />
    </div>
  );
}

export default Mentors;
