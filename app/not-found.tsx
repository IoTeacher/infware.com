export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="font-display text-4xl font-semibold text-white">Página no encontrada</h1>
      <a href="/" className="btn-primary">Volver al inicio</a>
    </main>
  );
}
