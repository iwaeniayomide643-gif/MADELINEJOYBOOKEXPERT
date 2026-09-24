import fs from "fs";
import path from "path";

const staticDir = path.resolve(".vercel/output/static");
const assetsDir = path.join(staticDir, "assets");

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(f => f.startsWith("styles-") && f.endsWith(".css")) || files.find(f => f.endsWith(".css"));
  const jsFile = files.find(f => f.startsWith("index-") && f.endsWith(".js")) || files.find(f => f.endsWith(".js"));

  console.log(`📦 Found client bundles: CSS = ${cssFile}, JS = ${jsFile}`);

  if (cssFile && jsFile) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Madeline Joy — Book Marketing & Author Services Specialist</title>
    <meta name="description" content="Madeline Joy helps authors present, promote, and grow their books through thoughtful marketing, trailers, websites, editing, formatting, SEO, and launch support." />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>
`;
    fs.writeFileSync(path.join(staticDir, "index.html"), htmlContent, "utf8");
    console.log("✅ Successfully generated production .vercel/output/static/index.html with linked bundle assets!");
  }
}
