import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generate() {
  try {
    const ssrPath = path.resolve(__dirname, "../.vercel/output/functions/__server.func/_ssr/ssr.mjs");
    if (!fs.existsSync(ssrPath)) {
      console.error("SSR file not found at:", ssrPath);
      return;
    }

    const ssrModule = await import(`file://${ssrPath.replace(/\\/g, "/")}`);
    const res = await ssrModule.default.fetch(new Request("http://localhost/"));
    const html = await res.text();

    const staticDir = path.resolve(__dirname, "../.vercel/output/static");
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }

    const targetHtmlPath = path.join(staticDir, "index.html");
    fs.writeFileSync(targetHtmlPath, html, "utf8");
    console.log(`✅ Successfully generated ${targetHtmlPath} (${html.length} bytes) with full SSR HTML and asset bundles!`);
  } catch (err) {
    console.error("❌ Error generating post-build HTML:", err);
  }
}

generate();
