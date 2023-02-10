const Produk = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Produk</h4>
      <div className="flex mx-auto justify-around space-x-3">
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <img className="object-cover w-screen h-48 rounded-lg" src="/motor.jpg" alt="Article" />
          <h4 className="font-bold text-center mt-3">Motor Retro</h4>
          <p className="text-based text-center">Kami menawarkan produk motor retro sesuai permintaan klien</p>
        </div>
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <img className="object-cover w-screen h-48 rounded-lg" src="/jacket.jpg" alt="Article" />
          <h4 className="font-bold text-center mt-3">Merchandise</h4>
          <p className="text-based text-center">Kami menawarkan produk Merchandise berupa Jacket dan Helm </p>
        </div>
        <div className="bg-slate-600 w-4/12 p-4 rounded-lg">
          <img className="object-cover w-screen h-48 rounded-lg" src="/sponsor.jpg" alt="Article" />
          <h4 className="font-bold text-center mt-3">Sponsorship</h4>
          <p className="text-based text-center">Kami menawarkan pengajuan Sponsorship ke brand besar</p>
        </div>
      </div>
    </div>
  );
};

export default Produk;
