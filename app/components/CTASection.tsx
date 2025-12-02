export default function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#172052] via-[#0A1634] to-[#0A0D26] px-10 py-20 text-white text-center">
        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full uppercase tracking-wide">
          Coming Soon
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-6">
          AI Assistant untuk Customer Service
        </h2>
        <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
          Tingkatkan efisiensi tim Anda dengan AI yang dapat mempelajari produk Anda dan menjawab pertanyaan pelanggan secara natural dan akurat.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="px-6 py-3 rounded-full bg-[#44C9C1] hover:bg-[#38b1aa] text-white text-sm">
            Join Waitlist
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-gray-900 text-sm hover:shadow">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
