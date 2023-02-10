const Event = () => {
  return (
    <>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Event</h4>
      <div className="flex justify-around space-x-3">
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/1.jpg" alt="Article" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">Riding Mingguan</h1>
              <p className="text-slate-400 text-sm mt-1">Setiap Minggu</p>
              <p className="text-white text-base">Riding Mingguan yang diadakan secara rutin.</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/2.jpeg" alt="Article" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">Touring Jakarta-Bogor</h1>
              <p className="text-slate-400 text-sm mt-1">10 Februari 2022</p>
              <p className="text-white text-base">Touring yang akan dilakukan pada tanggal tertera.</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/3.jpg" alt="Article" />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">Meet up The Prediksi</h1>
              <p className="text-slate-400 text-sm mt-1">24 Februari 2022</p>
              <p className="text-white text-base">Pertemuan rutin bulanan pada tanggal tertera.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
