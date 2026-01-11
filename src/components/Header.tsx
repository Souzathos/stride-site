export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo_stride.png"
              alt="Stride"
              className="h-9 sm:h-11 w-auto"
            />

            <div className="leading-tight">
              <span className="block text-white font-bold text-base sm:text-lg tracking-wide">
                STRIDE
              </span>
              <span className="block text-xs sm:text-sm text-white/60 tracking-widest">
                MARKETING DIGITAL
              </span>
            </div>
          </div>

          {/* Espaço para botões / links (se quiser depois) */}
          <div className="hidden sm:flex items-center gap-3" />
        </div>
      </div>
    </header>
  );
}
