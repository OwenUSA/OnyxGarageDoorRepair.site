/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estatico: el build deja en out/ HTML+CSS sin servidor.
  output: 'export',
  // /Weston -> out/Weston/index.html, URLs limpias sin .html
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
