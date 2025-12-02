export default function FeatureHighlight() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Smart Automation */}
        <div className="rounded-2xl bg-gradient-to-b from-[#2A1875] to-[#0F083E] text-white p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs opacity-50 mb-3">Easy Integration</p>
            <h3 className="text-3xl font-semibold">Smart Automation</h3>
            <p className="mt-4 text-sm opacity-80">
              Otomatisasi balasan chat 24 jam non-stop untuk meningkatkan kepuasan pelanggan Anda.
            </p>
          </div>
          <button className="mt-8 text-sm opacity-90 underline">Lihat Fitur</button>
        </div>

        {/* Multi-Agent Management */}
        <div className="rounded-2xl bg-gradient-to-b from-[#1C0F48] to-[#0C0628] text-white p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs opacity-50 mb-3">Message | Templates</p>
            <h3 className="text-3xl font-semibold">Multi-Agent Management</h3>
            <p className="mt-4 text-sm opacity-80">
              Buat dan kelola beberapa agen AI untuk berbagai macam tugas.
            </p>
          </div>
          <button className="mt-8 text-sm opacity-90 underline">Buat Agen AI</button>
        </div>
      </div>
    </section>
  );
}
