export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-small font-medium text-slate-200">há 2 dias</span>
      <p className="text-small leading-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab
        ipsa dolorum? Molestiae, tempore! Praesentium amet libero quis. Deleniti
        magni optio sapiente itaque facere provident quos deserunt facilis
        suscipit dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam ab ipsa dolorum? Molestiae, tempore! Praesentium amet libero
        quis. Deleniti magni optio sapiente itaque facere provident quos
        deserunt facilis suscipit dicta?
      </p>
      <div className="absolute bottom-0 pointer-events-none left-0 right-0 h-1/2 bg-gradient-to-b to-black/60 from-transparent " />
    </button>
  );
}
