<template>
  <div>
    <h1>Markdown to PDF Converter</h1>

    <label for="theme-select">Pilih Tema:</label>
    <select id="theme-select" v-model="selectedTheme">
      <option value="default">Default</option>
      <option value="github">GitHub</option>
      <option value="vs2015">Visual Studio 2015</option>
      <option value="atom-one-light">Atom One Light</option>
      <!-- Tambahkan tema lain sesuai kebutuhan -->
    </select>

    <textarea id="markdown-input" v-model="markdownText" rows="10" cols="80"></textarea>
    <button @click="convertMarkdownToPDF">Convert to PDF</button>
    <button @click="copyHTMLToClipboard">Copy to Clipboard</button>
    <div id="preview" style="margin-top: 20px;" v-html="previewHTML"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { marked } from 'marked';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/vs2015.css';
import 'highlight.js/styles/atom-one-light.css';
import ClipboardJS from 'clipboard';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const markdownText = ref('');
const previewHTML = ref('');
const selectedTheme = ref('default');

// Inisialisasi Highlight.js
hljs.configure({
  ignoreUnescapedHTML: true
});

// Fungsi untuk mengonversi Markdown ke PDF
function convertMarkdownToPDF() {
  const htmlContent = marked(markdownText.value, {
    highlight: function(code, lang) {
      return hljs.highlight(code, { language: lang }).value;
    }
  });

  // Buat PDF
  const dd = {
    content: [
      {
        text: htmlContent,
        margin: [20, 20, 20, 20],
        style: 'markdown'
      }
    ],
    styles: {
      markdown: {
        fontSize: 12,
        lineHeight: 1.5
      }
    }
  };

  pdfMake.createPdf(dd).download('document.pdf');
}

// Fungsi untuk menyalin HTML ke clipboard
function copyHTMLToClipboard() {
  const htmlContent = marked(markdownText.value, {
    highlight: function(code, lang) {
      return hljs.highlight(code, { language: lang }).value;
    }
  });

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = htmlContent;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  alert('HTML copied to clipboard!');
}

// Fungsi untuk memperbarui pratinjau HTML
watch(markdownText, () => {
  const htmlContent = marked(markdownText.value, {
    highlight: function(code, lang) {
      return hljs.highlight(code, { language: lang }).value;
    }
  });
  previewHTML.value = htmlContent;

  // Ganti tema Highlight.js
  nextTick(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      block.classList.remove(...hljs.listLanguages());
      block.classList.add(selectedTheme.value);
      hljs.highlightBlock(block);
    });
  });
});

// Fungsi untuk mengubah tema Highlight.js
watch(selectedTheme, () => {
  document.querySelectorAll('pre code').forEach((block) => {
    block.classList.remove(...hljs.listLanguages());
    block.classList.add(selectedTheme.value);
    hljs.highlightBlock(block);
  });
});
</script>

<style scoped>
#markdown-input {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

#preview {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>