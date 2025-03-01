<script setup>
import { ref, watch } from "vue";
import MarkdownIt from "markdown-it";
import jsPDF from "jspdf";

const md = new MarkdownIt();
const markdownText = ref("# Selamat datang di Playground Markdown!\n\nCoba tulis sesuatu di sini.");
const htmlOutput = ref(md.render(markdownText.value));

watch(markdownText, (newValue) => {
  htmlOutput.value = md.render(newValue);
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(htmlOutput.value).then(() => {
    alert("HTML berhasil disalin!");
  });
};

const downloadPDF = () => {
  const doc = new jsPDF();
  doc.text(markdownText.value, 10, 10);
  doc.save("markdown.pdf");
};

const downloadDOCX = () => {
  const blob = new Blob([markdownText.value], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "markdown.docx";
  link.click();
};
</script>

<template>
  <div class="playground-container">
    <div class="editor">
      <h3>Markdown Editor</h3>
      <textarea v-model="markdownText" placeholder="Tulis Markdown di sini..."></textarea>
    </div>
    <div class="preview">
      <h3>Preview HTML</h3>
      <div v-html="htmlOutput" class="output"></div>
      <button @click="copyToClipboard">Copy HTML</button>
      <button @click="downloadPDF">Download PDF</button>
      <button @click="downloadDOCX">Download DOCX</button>
    </div>
  </div>
</template>

<style scoped>
.playground-container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.editor, .preview {
  width: 50%;
}
textarea {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: monospace;
}
.output {
  border: 1px solid #ccc;
  min-height: 300px;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 5px;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background: navy;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}
</style>
