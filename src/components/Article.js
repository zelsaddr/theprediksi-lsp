const Article = () => {
  return (
    <>
      <h4 className="font-bold text-2xl p-1 italic mt-6 mr-8">Artikel</h4>
      <article className="p-4 rounded-md border border-slate-300">
        <img className="object-cover w-screen h-48 rounded-lg" src="/membertheprediksi.jpg" alt="Article" />
        <h4 className="text-white font-semibold mt-4 text-lg">8 Seragam Unik The Prediksi Klub Motor Andre Taulany, Baju TK Hingga Kaos Ala Parpol</h4>
        <p className="text-slate-400 text-sm mt-1">10 Februari 2022</p>
        <p className="my-2 text-base text-justify">
          Seragam unik klub motor Andre Taulany saat touring kembali mencuri sorotan. Setelah sebelumnya tampil ala anak TK, kini The Prediksi tampil layaknya anak SD. The Prediksi merupakan geng motor yang beranggotakan presenter dan
          pelawak kondang tanah air. Klub motor yang diketuai oleh Andre Taulany ini baru saja melakukan touring ke Yogyakarta bersama seluruh anggotanya. Anggota The Prediksi yaitu Vincent, Desta, Omesh, Tora Sudiro, Ferry Maryadi, Stevi
          Item, Surya Insomnia, Imam Darto, Gading Marten, Wendy Cagur, Soleh Solihun, dan Ronald Surapradja.Geng motor satu ini tengah jadi perhatian publik lantaran seragam unik dan anti mainstream yang mereka kenakan saat touring.
        </p>
        <div className="mt-5 mb-2">
          <a className="bg-slate-600 px-4 py-2 rounded-lg font-semibold text-white hover:text-rose-600" href="/artikel/asdas">
            Baca lebih lanjut
          </a>
        </div>
      </article>
    </>
  );
};

export default Article;
