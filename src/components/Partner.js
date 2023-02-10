const Partner = () => {
  return (
    <>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Partner Kami</h4>
      <div className="flex justify-around space-x-3">
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/Taulany.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Taulany TV</div>
              <p className="text-white text-base">Sebagai Media Partner Penyiaran</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/vindes.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">VINDES</div>
              <p className="text-white text-base">Sebagai Media Partner Sosialisasi</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/harley.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Harley Davidson</div>
              <p className="text-white text-base">Sebagai kendaraan dalam berkendara</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around space-x-3">
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/tiketcom.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tiket.com</div>
              <p className="text-white text-base">Sebagai Fasilitas Perjalanan</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/kyt.webp" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">KYT Helmet</div>
              <p className="text-white text-base">Sebagai sarana keselamatan dalam berkendara</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/tigre.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tigrehood</div>
              <p className="text-white text-base">Sebagai fashion partner dalam berkendara jauh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
