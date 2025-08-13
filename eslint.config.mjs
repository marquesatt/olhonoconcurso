import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

let tailwindcss
try {
  tailwindcss = (await import("eslint-plugin-tailwindcss")).default
} catch {}
const jsxA11y = (await import("eslint-plugin-jsx-a11y")).default
const reactHooks = (await import("eslint-plugin-react-hooks")).default
const reactRefresh = (await import("eslint-plugin-react-refresh")).default

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      ...(tailwindcss ? { "tailwindcss": tailwindcss } : {}),
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Tailwind CSS plugin (enabled only if available)
      ...(tailwindcss
        ? {
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/enforces-negative-arbitrary-values": "warn",
            "tailwindcss/enforces-shorthand": "warn",
            "tailwindcss/no-contradicting-classname": "error",
          }
        : {}),
      // A11y
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "warn",
      // React hooks best practices
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Refresh safety
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: [
      "src/app/layout.tsx",
      "src/app/**/layout.tsx",
      "src/components/ui/**/*.tsx",
    ],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];

export default eslintConfig;
