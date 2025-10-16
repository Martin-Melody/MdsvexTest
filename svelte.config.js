import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte } from 'mdsvex';

import { mdsvex } from 'mdsvex';
import * as shiki from 'shiki';

import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';



/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'javascript') => {
      const highlighter = await shiki.createHighlighter({
        themes: ['catppuccin-frappe'],

        // support multiple languages
        langs: [
          'javascript',
          'typescript',
          'html',
          'css',
          'svelte',
          'json',
          'markdown',
          'bash',
          'shell',
          'java'
        ]
      });
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          theme: 'catppuccin-frappe',
          lang
        })
      );
      return `{@html \`${html}\`}`;
    }
  },
  remarkPlugins: [remarkToc],
  rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter()
  }
};

export default config;
