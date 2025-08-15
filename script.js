function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); // Clean up
}

// Example usage:
// downloadFile("path/to/your/file.pdf", "my_document.pdf");
// downloadFile("https://example.com/image.jpg"); // Filename extracted from URL
