import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Berkirim Pesan menghormati privasi Anda. Dokumen ini menjelaskan bagaimana
          kami mengumpulkan, menggunakan, dan melindungi data Anda ketika
          menggunakan platform kami.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Informasi yang Dikumpulkan
        </h2>
        <p className="text-gray-600 mb-4">
          Data kontak dan informasi akun yang diberikan oleh pengguna saat
          pendaftaran atau penggunaan fitur.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Penggunaan Informasi
        </h2>
        <p className="text-gray-600 mb-4">
          Kami menggunakan data untuk mengoperasikan layanan WhatsApp Automation,
          integrasi AI, dan fitur Multi-Agent.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Keamanan Informasi
        </h2>
        <p className="text-gray-600 mb-4">
          Kami menerapkan sistem keamanan tinggi untuk menjaga data pengguna.
        </p>

        <p className="text-gray-600 mt-10">
          Jika Anda memiliki pertanyaan mengenai privasi, silakan hubungi kami.
        </p>
      </div>

      <Footer />
    </main>
  );
}
