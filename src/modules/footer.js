function footer() {
  const div = document.createElement("div");
  div.className = "footer";

  div.innerHTML = `
    <div class="footer">
      <p>
        Copyright ©
        <script>
          document.write(new Date().getFullYear())
        </script>
        haileyrs
      </p>
    </div>
  `
}

export default footer;