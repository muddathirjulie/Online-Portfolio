<script>
  document.querySelector(".contact-form").onsubmit = function() {
    setTimeout(function() {
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }, 10)
  };
</script>
