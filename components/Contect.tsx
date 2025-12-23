"use client";



const Contect = () => {
  return (
    <div>
      <p className="text-7xl text-[#ff5522] font-normal  pl-10 mb-4">
        Subscribe to get 10% off.
      </p>
      <div className="flex items-center pl-10">
        <input
          type="email"
          placeholder="Email address"
          className="py-3 px-4 w-[70%]  border-1 border-[#ff5522] text-5xl rounded-md items-center justify-center placeholder:text-5xl text-[#ff5522]  "
        />
        <button className="text-[#ff5522] border-1 border-[#ff4b22] w-[30%]  items-center p-5 m-5 hover:bg-[#ff5522] hover:text-white rounded-full   font-normal text-5xl cursor-pointer">
          Subscribe
        </button>
      </div>
      <p className="text-[#ff5522] pl-10 m-4 font-semibold">
        By signing up to receive emails from Munchies, you agree to our privacy
        policy. We treat your info responsibly.
      </p>
    </div>
  );
};

export default Contect;
