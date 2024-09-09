"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/ui/avatar";
import Audio from "@/components/ui/audio";
import RadarChartComponent from "@/components/ui/radar";

export default function Home() {
  return (
    <div>
      <div className="px-4 w-full max-w-[60rem] min-h-screen mx-auto flex gap-4 pb-4 flex-col text-xs lg:px-0">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Avatar />
          <div className="w-full flex flex-col py-2 justify-between md:flex-row">
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-2">
                <p className="opacity-70">jces</p>

                <h1 className="text-sm">
                  joão rafael valarini rodrigues ceschini
                </h1>
              </div>
              <div className="flex gap-2 ">
                <Link
                  href="https://github.com/joaorceschini"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  /github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/joaorceschini/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  /linkedin
                </Link>
              </div>
            </div>
            <Audio />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pb-2 border-b border-dashed border-neutral-800">
            <h2 className="text-sm">technical skills</h2>
            <div className="flex flex-col gap-2">
              <p className="opacity-70">dev</p>
              <div>
                <p>
                  javascript - typescript - html/css - sql [postgres, mysql] -
                  nodejs - react - nextjs - tailwind - git/github - firebase
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 md:flex-row">
            <div className="flex flex-col flex-1 gap-4">
              <div className="flex flex-col gap-2 pb-2 border-b border-dashed border-neutral-800">
                <h2 className="text-sm">education</h2>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <p className="text-base font-bold">software engineering</p>
                    <p>[01/2023 - 01/2027]</p>
                  </div>
                  <p className="opacity-70">unicesumar</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-2 border-b border-dashed border-neutral-800">
                <h2 className="text-sm">experience</h2>
                <div className="flex flex-col gap-2 max-h-[250px] pr-2 overflow-y-scroll">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <p className="text-base font-bold">
                          frontend developer
                        </p>
                        <p>[09/2024 - present]</p>
                      </div>
                      <Link
                        href="https://march.cat"
                        className="opacity-70 hover:underline"
                      >
                        <span>at </span>march
                      </Link>
                    </div>
                    <div className="flex flex-col ml-2 opacity-70 gap-2">
                      <p>...</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center">
                        <p className="text-base font-bold">web developer</p>
                        <p>[01/2020 - 11/2023]</p>
                      </div>
                      <Link
                        href="https://hcode.com.br/"
                        className="opacity-70 hover:underline"
                      >
                        <span>at </span>hcode
                      </Link>
                    </div>
                    <div className="flex flex-col ml-2 opacity-70 gap-2">
                      <p>
                        Provided student support in online programming courses.
                      </p>
                      <p>
                        Participated in the development of several projects on
                        demand.
                      </p>
                      <p>
                        Utilized HTML, CSS, Javascript, React, NextJS,
                        Typescript, NestJS, Prisma, and databases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 gap-2 relative min-h-[200px] ">
              <div className="absolute w-full h-full min-h-[200px] opacity-20">
                <Image
                  src="/lainbg.jpg"
                  alt="lainbg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <RadarChartComponent />
            <div className="flex-1 flex justify-center items-center">
              <p className="text-3xl opacity-0 hover:opacity-100">neovim btw</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
