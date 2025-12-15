"use client";
import Image from "next/image";
import React, { useState } from "react";
import jeremy from "../../images/jeremy.png";
import data from "../../data.json";
import work from "../../images/work.svg";
import play from "../../images/play.svg";
import study from "../../images/study.svg";
import exercise from "../../images/exercise.svg";
import social from "../../images/social.svg";
import selfcare from "../../images/selfcare.svg";

const activityConfig = {
  Work: { color: "#ff8c66ff", img: work },
  Play: {
    color: "#56c2e6ff",
    img: play,
  },
  Study: {
    color: "#ff5c7cff",
    img: study,
  },
  Exercise: {
    color: "#4acf81ff",
    img: exercise,
  },
  Social: {
    color: "#7536d3ff",
    img: social,
  },
  Self: {
    color: "#f1c65bff",
    img: selfcare,
  },
};
const Section = ({}) => {
  const [period, setPeriod] = useState("weekly");
  function getPreviousLabel() {
    switch (period) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      default:
        return "Last Week";
    }
  }

  return (
    <section className="bg-[#0d1323] text-white font-light min-h-screen py-10 px-5">
      <div className="grid grid-cols-1 gap-6 max-w-6xl m-auto md:grid-cols-4">
        <div className="md:row-span-2 row-span-1 rounded-xl w-full flex flex-col gap-5 bg-[#1d204a]">
          <div className="w-full rounded-xl h-[70%] flex md:flex-col justify-center md:items-start items-center gap-5 p-10 bg-[#5847ebff]">
            <Image
              src={jeremy}
              alt=""
              className="w-16 p-[.5px]  border border-white rounded-full"
            />
            <div>
              <h3 className="text-xs text-[#bfbfc0] font-light">Report for</h3>
              <h2 className="text-3xl">
                Jeremy <br className="hidden md:block" /> Robinson
              </h2>
            </div>
          </div>
          <div className="flex md:flex-col justify-evenly md:items-start md:gap-2 md:ml-12 items-center">
            {["daily", "weekly", "monthly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`${period === p ? "text-white" : "text-[#757cc5]"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        {/* rightside */}

        {data.map((activity) => {
          const config = activityConfig[activity.title];
          const current = activity.timeframes[period].current;
          const previous = activity.timeframes[period].previous;

          return (
            <div className="relative " key={activity.title}>
              <div
                className={`rounded-xl border-transparent overflow-hidden w-full pb-0 relative`}
                style={{ backgroundColor: config?.color || "#1d204a" }}
              >
                {config?.img && (
                  <Image
                    src={config.img}
                    alt={config.title}
                    className="absolute top-0 right-0 z-0"
                  />
                )}
                <div
                  className={`w-full p-3 bg-clip-border mt-10 border-transparent bg-[#1d204a] z-40 rounded-xl relative`}
                >
                  <div className="flex justify-between z-10 px-5 items-center">
                    <h3 className="font-medium">{activity.title}</h3>
                    <span className="mb-2 font-bold text-xl">...</span>
                  </div>

                  <div className="px-5 py-3">
                    <h2 className="text-4xl">
                      {current}
                      {current <= 1 ? "hr" : "hrs"}
                    </h2>
                    <h3 className="text-sm my-2">
                      Last Week - {previous}
                      {previous <= 1 ? "hr" : "hrs"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
