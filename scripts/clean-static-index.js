import fs from "fs";
import path from "path";

const staticIndexPath = path.resolve(".vercel/output/static/index.html");
if (fs.existsSync(staticIndexPath)) {
  fs.unlinkSync(staticIndexPath);
  console.log("✅ Removed .vercel/output/static/index.html so Vercel forwards root requests to SSR handler.");
} else {
  console.log("ℹ️ No static index.html found in .vercel/output/static.");
}
