export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Crypto Tracker. Built for VR Automations.
        </p>
      </div>
    </footer>
  );
}
