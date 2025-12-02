import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm">
        <p className="text-gray-600">© {new Date().getFullYear()} Berkirim Pesan. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="/terms" className="text-gray-600 hover:text-gray-800">Terms</Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
