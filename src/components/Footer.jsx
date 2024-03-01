import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-secondary text-black" id="footer">
      <div className="px-4 mx-auto max-w-[1240px]">
        <div className="grid grid-cols-3 py-16 gap-10 lg:mx-auto">
          <div className="flex flex-col col-span-3 lg:col-span-1 gap-6">
            <div>
              <Link
                to="/"
                className="uppercase cursor-pointer text-xl font-bold hover:tracking-wider duration-200 flex gap-2 items-center"
              >
                <img src="src/assets/brand.png" alt="" width={"45px"} />
                <h1>mayeso.</h1>
              </Link>
            </div>
            <p className="text-sm text-center lg:text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium debitis architecto, ex temporibus aspernatur
              doloremque.
            </p>
            <div className="flex justify-between items-center w-[70%]">
              <FaFacebookSquare size={30} />
              <FaInstagramSquare size={30} />
              <FaTwitter size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
            </div>
          </div>
          <div className="flex gap-6 col-span-3 lg:col-span-2 justify-center gap-8">
            <div className="">
              <h2 className="text-gray-800 font-semibold uppercase mb-3">
                documentation
              </h2>
              <div className="list-none flex flex-col gap-2 text-xs">
                <p>Web API</p>
                <p>Web Playback SDK</p>
                <p>Ads API</p>
                <p>iOS</p>
                <p>Android</p>
                <p>Embeds</p>
                <p>Commercial Hardware</p>
              </div>
            </div>
            <div className="">
              <h2 className="text-gray-800 font-semibold uppercase mb-3">
                Guidelines
              </h2>
              <div className="list-none flex flex-col gap-2 text-xs">
                <p>Design</p>
                <p>Accessibility</p>
              </div>
            </div>
            <div className="">
              <h2 className="text-gray-800 font-semibold uppercase mb-3">
                Community
              </h2>
              <div className="list-none flex flex-col gap-2 text-xs">
                <p>News</p>
                <p>Forum</p>
              </div>
            </div>
            <div className="">
              <h2 className="text-gray-800 font-semibold uppercase mb-3">
                Legal
              </h2>
              <div className="list-none flex flex-col gap-2 text-xs">
                <p>Developer Terms</p>
                <p>Developer Policy</p>
                <p>Compliance Tips</p>
                <p>Third Party Licenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
