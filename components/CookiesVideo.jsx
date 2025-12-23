"use client";

const Video = () => {
  return (
    <section className="relative  h-[70vh] md:h-screen overflow-hidden ">
      {/* Video */}
      <video
        className="absolute inset-0 p-10 rounded w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/1020132505/rendition/1440p/file.mp4?loc=external&signature=f06b3cf5ea7ccf3001beb25df15dcd7fed50626435f314c3049226062cd54e5e"
          type="video/mp4"
        />
      </video>

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div
        className="
        relative z-10
        flex flex-col items-center justify-center
        h-full
        text-center
        px-4
      "
      >
        <h1
          className="
          text-white
          text-3xl
          sm:text-4xl
          md:text-6xl
          lg:text-7xl
          font-serif
          font-normal
          max-w-3xl
        "
        >
          Cozy up with our new cookie collection
        </h1>

        <button
          className="
          mt-6 md:mt-8
          px-6 md:px-8
          py-3 md:py-4
          bg-[#ff5522]
          text-white
          rounded-full
          font-semibold
          text-lg md:text-2xl
          hover:bg-white hover:text-[#ff5522]
          transition
        "
        >
          Shop now
        </button>
      </div>
    </section>
  );
};

export default Video;
