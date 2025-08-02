document.getElementById("orderNowBtn").addEventListener("click", () => {
  const phoneNumber = "233546945944"; // Your WhatsApp number without + or spaces
  const message = encodeURIComponent(
    "Hello, I'm interested in placing an order."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp chat with pre-filled message
  window.open(whatsappUrl, "_blank");
});
