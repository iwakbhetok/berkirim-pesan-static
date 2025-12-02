export default function FeatureGrid() {
  const features = [
    {
      title: "Kirim Pesan Massal",
      desc: "Kirim informasi penting ke semua pelanggan dalam sekali klik. Hemat waktu dan tenaga Anda.",
    },
    {
      title: "Balasan Otomatis",
      desc: "Balas pesan pelanggan secara otomatis saat Anda sedang sibuk atau di luar jam kerja.",
    },
    {
      title: "Manajemen Chat",
      desc: "Kelola pesan masuk dari pelanggan dengan mudah dan terorganisir dalam satu tempat.",
    },
    {
      title: "Laporan Pengiriman",
      desc: "Lihat performa pesan Anda dengan laporan pengiriman yang jelas dan mudah dipahami.",
    },
    {
      title: "Multi-AI Agent",
      desc: "Integrasi dengan Multi-AI Agent untuk automasi cerdas dan respons yang lebih personal.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white"
        >
          <h4 className="font-semibold mb-3">{f.title}</h4>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
