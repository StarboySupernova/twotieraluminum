#!/usr/bin/env node

/* eslint-disable */

/**
 * Advanced Project Structure Generator
 * - Full file contents (no truncation)
 * - Detects .blade.php correctly
 * - Detects images/videos/media
 * - Smart emojis
 * - Clean tree structure
 */

const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "project_structure.md";

const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  "out",
  "DerivedData",
  "Pods",
  ".build",
  "vendor",
  "__MACOSX",
  ".vscode",
  ".idea",
  "xcuserdata",

  // Webpack / bundler caches & build output
  ".webpack",
  ".cache",
  "cache",
  ".parcel-cache",
  ".turbo",
  ".swc",
  "webpack-stats",

  // Other framework build/output dirs
  ".nuxt",
  ".output",
  ".svelte-kit",
  ".angular",
  ".docusaurus",
  ".vercel",
  ".netlify",
  ".serverless",
  ".firebase",
  "coverage",
  "tmp",
  ".tmp",

  // Moodle-specific generated/cache dirs
  "moodledata",
  "localcache",
  "sessions",
  "temp",
  "trashdir",
]);

const ALLOWED_EXT = new Set([
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
  ".html",
  ".css",
  ".scss",
  ".md",
  ".swift",
  ".m",
  ".mm",
  ".h",
  ".c",
  ".cpp",
  ".plist",
  ".xml",
  ".sh",
  ".php",
  ".blade.php",

  // Images
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",

  // Video
  ".mp4",
  ".mov",

  // Audio
  ".mp3",
  ".wav",
]);

const BINARY_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".svg",
  ".mp4",
  ".mov",
  ".mp3",
  ".wav",
]);

const EXT_TO_LANG = {
  ".js": "JavaScript",
  ".ts": "TypeScript",
  ".jsx": "JSX",
  ".tsx": "TSX",
  ".json": "JSON",
  ".html": "HTML",
  ".css": "CSS",
  ".scss": "SCSS",
  ".md": "Markdown",
  ".swift": "Swift",
  ".m": "Objective-C",
  ".mm": "Objective-C++",
  ".h": "Header",
  ".c": "C",
  ".cpp": "C++",
  ".plist": "Plist",
  ".xml": "XML",
  ".sh": "Shell",
  ".php": "PHP",
  ".blade.php": "Blade",

  ".jpg": "Image",
  ".jpeg": "Image",
  ".png": "Image",
  ".gif": "Image",
  ".webp": "Image",
  ".svg": "SVG",

  ".mp4": "Video",
  ".mov": "Video",

  ".mp3": "Audio",
  ".wav": "Audio",
};

// Proper extension detection
function getExtension(filename) {
  const lower = filename.toLowerCase();

  // Multi-part extensions
  if (lower.endsWith(".blade.php")) return ".blade.php";

  return path.extname(lower);
}

// Smart file emojis
function getFileEmoji(filename) {
  const ext = getExtension(filename);
  const name = filename.toLowerCase();

  // Swift / Apple
  if (ext === ".swift") return "🍎 ";
  if (ext === ".plist") return "📋 ";

  // React / Frontend
  if (
    name.includes("app.") ||
    name.includes("page.") ||
    name.includes("layout.")
  )
    return "📄⚛️ ";

  if (name.includes("component") || name.includes("comp."))
    return "🧩 ";

  if (ext === ".tsx" || ext === ".jsx") return "⚛️ ";
  if (ext === ".ts") return "🔷 ";
  if (ext === ".js") return "🟨 ";

  // Styling
  if (ext === ".css" || ext === ".scss") return "🎨 ";
  if (name.includes("tailwind")) return "🌬️ ";
  if (name.includes("vite.config")) return "⚡ ";
  if (name.includes("webpack")) return "📦 ";

  // Config / Env
  if (ext === ".json") return "🔧 ";
  if (name.includes("config") || name.includes("setup"))
    return "⚙️ ";
  if (name.includes("env")) return "🔒 ";

  // Backend / Laravel
  if (ext === ".php" || ext === ".blade.php")
    return "🐘 ";

  if (name.includes("controller")) return "🎮 ";
  if (name.includes("model")) return "📊 ";
  if (name.includes("route")) return "🛤️ ";

  // Images
  if (
    ext === ".jpg" ||
    ext === ".jpeg" ||
    ext === ".png" ||
    ext === ".gif" ||
    ext === ".webp"
  )
    return "🖼️ ";

  if (ext === ".svg") return "🎨 ";

  // Video
  if (ext === ".mp4" || ext === ".mov")
    return "🎬 ";

  // Audio
  if (ext === ".mp3" || ext === ".wav")
    return "🎵 ";

  // Misc
  if (ext === ".md") return "📝 ";
  if (ext === ".sh") return "🐚 ";

  return "📄 ";
}

// Smart folder emojis
function getFolderEmoji(folderName) {
  const name = folderName.toLowerCase();

  if (name === "src" || name === "source") return "📂 ";
  if (name === "components" || name === "comp")
    return "🧩 ";
  if (name === "pages" || name === "routes")
    return "📑 ";
  if (
    name === "styles" ||
    name === "css" ||
    name === "scss"
  )
    return "🎨 ";

  if (name === "public") return "🌐 ";
  if (name === "studio") return "🧠 ";
  if (name === "web") return "🌐 ";

  if (name.includes("sanity")) return "🧠 ";

  if (name.includes("api") || name === "server")
    return "🔌 ";

  if (name.includes("utils") || name === "lib")
    return "🛠️ ";

  if (
    name.includes("assets") ||
    name.includes("images")
  )
    return "🖼️ ";

  if (
    name.includes("tests") ||
    name.includes("__tests__")
  )
    return "🧪 ";

  return "📁 ";
}

// Recursively collect files
function walk(dir, fileList = []) {
  try {
    const entries = fs.readdirSync(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      if (
        IGNORED_DIRS.has(entry.name) ||
        entry.name === OUTPUT_FILE ||
        entry.name === ".DS_Store" ||
        entry.name.endsWith(".xcuserstate")
      ) {
        continue;
      }

      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath, fileList);
      } else {
        fileList.push(fullPath);
      }
    }
  } catch (err) {
    console.warn(`Warning: Could not read ${dir}`);
  }

  return fileList;
}

function writeLine(stream, line = "") {
  stream.write(line + "\n");
}

// Stats
function computeStats(files) {
  const stats = {
    totalFiles: 0,
    languages: {},
  };

  files.forEach((f) => {
    const ext = getExtension(f);

    if (!ALLOWED_EXT.has(ext)) return;

    stats.totalFiles++;

    const lang =
      EXT_TO_LANG[ext] || ext.slice(1).toUpperCase();

    stats.languages[lang] =
      (stats.languages[lang] || 0) + 1;
  });

  return stats;
}

function formatLanguageStats(stats) {
  const total = stats.totalFiles || 1;

  return Object.entries(stats.languages)
    .sort((a, b) => b[1] - a[1])
    .map(
      ([lang, count]) =>
        `- ${lang}: ${count} files (${(
          (count / total) *
          100
        ).toFixed(1)}%)`
    );
}

// Tree printer
function printTree(dir, prefix = "", stream) {
  try {
    let entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(
        (entry) =>
          !IGNORED_DIRS.has(entry.name) &&
          entry.name !== OUTPUT_FILE &&
          entry.name !== ".DS_Store" &&
          !entry.name.endsWith(".xcuserstate")
      )
      .sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory())
          return -1;

        if (!a.isDirectory() && b.isDirectory())
          return 1;

        return a.name.localeCompare(b.name);
      });

    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;

      const connector = isLast
        ? "└── "
        : "├── ";

      const newPrefix =
        prefix + (isLast ? "    " : "│   ");

      if (entry.isDirectory()) {
        const emoji = getFolderEmoji(entry.name);

        writeLine(
          stream,
          prefix + connector + emoji + entry.name
        );

        printTree(
          path.join(dir, entry.name),
          newPrefix,
          stream
        );
      } else {
        const emoji = getFileEmoji(entry.name);

        writeLine(
          stream,
          prefix + connector + emoji + entry.name
        );
      }
    });
  } catch (err) {}
}

// ====================== MAIN ======================

(function main() {
  const args = process.argv.slice(2);

  const NO_CONTENT =
    args.includes("--no-content");

  const root = process.cwd();

  const output = fs.createWriteStream(
    OUTPUT_FILE,
    { encoding: "utf8" }
  );

  console.log("🔍 Scanning project...");

  const files = walk(root);

  const stats = computeStats(files);

  // Overview
  writeLine(output, "# Project Overview\n");

  writeLine(output, "## Project Summary");

  writeLine(
    output,
    `- Total Files (tracked): ${stats.totalFiles}\n`
  );

  writeLine(output, "### Language Breakdown");

  formatLanguageStats(stats).forEach((line) =>
    writeLine(output, line)
  );

  writeLine(output, "");

  // Tree
  writeLine(output, "## Project Structure\n");

  writeLine(output, "```");

  writeLine(output, ".");

  printTree(root, "", output);

  writeLine(output, "```");

  // File contents
  if (!NO_CONTENT) {
    writeLine(output, "\n# File Contents\n");

    files.forEach((file) => {
      const ext = getExtension(file);

      if (!ALLOWED_EXT.has(ext)) return;

      try {
        const relativePath = path.relative(
          root,
          file
        );

        writeLine(output, `## \`${relativePath}\``);

        // Media files
        if (BINARY_EXTENSIONS.has(ext)) {
          writeLine(output, "");

          writeLine(
            output,
            `Media file detected (${ext})`
          );

          writeLine(output, "");

          return;
        }

        const content = fs.readFileSync(
          file,
          "utf8"
        );

        writeLine(output, "```");

        writeLine(output, content);

        writeLine(output, "```");
      } catch (e) {
        console.warn(
          `Could not read file: ${file}`
        );
      }
    });
  } else {
    writeLine(
      output,
      "\n# File Contents\n(Skipped — run without --no-content to include)"
    );
  }

  output.end();

  console.log(
    `✅ Done! Generated → ${OUTPUT_FILE}`
  );
})();