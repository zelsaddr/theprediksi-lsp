const Profile = () => {
  return (
    <>
      <h4 className="font-bold text-2xl p-1 italic mb-5 mr-8">Profil</h4>
      <article className="p-4 rounded-md border border-slate-300">
        <img className="object-cover w-screen h-52 rounded-lg" src="/2.jpeg" alt="Article" />
        <h2 className="text-2xl font-bold mb-2 italic mt-4">Filosofi</h2>
        <p className="my-2 text-base text-justify">
          The Prediksi adalah klub motor yang digagas oleh Andre Taulany dan Ronal Surapradja sejak tahun 2018, beranggotakan selebritas dan figur publik Indonesia sebagai sarana hiburan semata dan ajang silaturahmi. Klub ini terdiri dari
          anggota dengan berbagai profesi, namun didominasi oleh komedian.
        </p>
        <h2 className="text-2xl font-bold mb-2 italic">Kelebihan Menjadi Anggota</h2>
        <ul>
          <li class="list-disc ml-10">Berkumpulnya orang-orang yang memiliki hobi yang sama membuat suasana menjadi lebih akrab dan saling berbagi informasi.</li>
          <li class="list-disc ml-10">Ada peluang untuk memperluas jaringan sosial dan membangun hubungan yang lebih baik dengan orang-orang baru.</li>
          <li class="list-disc ml-10">Terdapat banyak sumber informasi dan pengetahuan tentang motor, seperti perawatan, modifikasi, dan masalah yang mungkin dihadapi saat menggunakan motor.</li>
          <li class="list-disc ml-10">Berkendara bersama-sama dalam sebuah komunitas membuat pengalaman berkendara menjadi lebih menyenangkan dan membantu meningkatkan keamanan saat berkendara.</li>
          <li class="list-disc ml-10">Berkumpulnya orang-orang dengan minat yang sama membuat adanya kesempatan untuk berpartisipasi dalam acara-acara dan kegiatan bersama, seperti perjalanan, pameran motor, dan lain sebagainya.</li>
          <li class="list-disc ml-10">Terdapat peluang untuk belajar dan meningkatkan keterampilan, baik dalam hal mekanik maupun dalam hal berkendara.</li>
          <li class="list-disc ml-10">Komunitas motor dapat membantu meningkatkan rasa bangga dan cinta terhadap motor yang dimiliki.</li>
        </ul>
      </article>
    </>
  );
};

export default Profile;
