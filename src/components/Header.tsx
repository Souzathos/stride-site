const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-start">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 sm:gap-4 group">
          <img
            src="/logo_stride.png"
            alt="Stride Digital"
            className="
              h-12 sm:h-20 
              w-auto object-contain 
              transition-transform duration-300 
              group-hover:scale-105
            "
          />

          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg sm:text-2xl tracking-tight text-foreground">
              STRIDE
            </span>
            <span className="text-[10px] sm:text-sm tracking-widest text-muted-foreground uppercase">
              Marketing Digital
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
