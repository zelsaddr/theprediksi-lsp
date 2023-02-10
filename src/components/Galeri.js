const GalleryCard = () => {
  return (
    <>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Galeri</h4>
      <div className="flex justify-around space-x-3">
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/1.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Filosofi</div>
              <p className="text-white text-base">'gimana kalau kita motoran hari Sabtu atau Minggu?'</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/2.jpeg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Hollywood</div>
              <p className="text-white text-base">Perjalanan Hollywood</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-4/12">
          <div className="bg-slate-600 rounded overflow-hidden shadow-lg">
            <img className="object-cover w-screen h-52 h-rounded-lg" src="/3.jpg" alt="Article" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Meet up The Prediksi</div>
              <p className="text-white text-base">Pertemuan The Prediksi di Luar Negeri</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
