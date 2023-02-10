const Kontak = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Kontak Kami</h4>
      <div className="flex mx-auto justify-around space-x-3">
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <h4 className="font-bold text-center">Instagram</h4>
          <p className="text-based text-center">@theprediksi</p>
        </div>
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <h4 className="font-bold text-center">Twitter</h4>
          <p className="text-based text-center">@ThePrediksiOfc</p>
        </div>
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <h4 className="font-bold text-center">YouTube</h4>
          <p className="text-based text-center">The Prediksi</p>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
