import React from "react";
import Header from "./_components/Header";

function page() {
  return (
    <>
      <Header />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className="text-primary">Upload,Save</span> and Share
              <strong className="font-extrabold text-black sm:block">
                {" "}
                Files Easily.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              ShareGen is a simple file sharing service that allows you to
              upload, save and share files with ease. Get started now and share
              your files with ease.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow focus:outline-none focus:ring active:text-black sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
