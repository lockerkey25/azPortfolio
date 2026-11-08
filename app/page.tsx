export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center px-8 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Portfolio</p>
      <h1 className="mt-4 text-6xl font-semibold tracking-tight text-zinc-100 sm:text-8xl">
        AZ
      </h1>
      <p className="mt-6 max-w-lg text-xl leading-8 text-zinc-400">
        placeholder
      </p>
      <nav aria-label="Contact links" className="mt-8 flex gap-6">
        <a
          className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-400"
          href="https://github.com/lockerkey25/"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-400"
          href="https://www.linkedin.com/in/yiyizhou25/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-zinc-100 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-400"
          href="mailto:lockerkey25@gmail.com"
        >
          Email
        </a>
      </nav>
    </main>
  );
}
