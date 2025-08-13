# Olho no Concurso — Flowbite + Tailwind + Vite

Projeto inicial com Tailwind CSS e Flowbite integrados usando Vite.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o link mostrado pelo Vite no terminal (geralmente http://localhost:5173).

## Estrutura
- `index.html` — página exemplo com Navbar e Modal do Flowbite
- `src/style.css` — entrada do Tailwind
- `src/main.js` — importa CSS e Flowbite JS
- `tailwind.config.js` — inclui paths e plugin do Flowbite
- `postcss.config.js` — Tailwind + Autoprefixer

## Notas
- Tailwind 3.x é usado por compatibilidade com Flowbite 2.x.
- Para componentes adicionais, veja https://flowbite.com/
