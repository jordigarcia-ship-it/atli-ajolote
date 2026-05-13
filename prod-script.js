// ── Cambiar imagen principal ──
function setImgSrc(src) {
  const img = document.getElementById('main-img');
  img.style.opacity = '0';
  img.style.transform = 'scale(0.96)';
  setTimeout(() => {
    img.src = src;
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 160);
}

function setImg(thumb) {
  setImgSrc(thumb.src);
  document.querySelectorAll('.prod-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ── Cantidad ──
let cantidad = 1;
function cambiarCantidad(delta) {
  cantidad = Math.max(1, cantidad + delta);
  document.getElementById('cant').textContent = cantidad;
}

// ── Toast ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Agregar al carrito ──
function agregar() {
  const nombre = document.querySelector('.prod-nombre').textContent;
  showToast(`¡${cantidad} ${nombre} agregado${cantidad > 1 ? 's' : ''} al carrito! 🛒`);
}

// ── Comprar ahora ──
function comprar(e) {
  const btn = e.currentTarget;
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
  showToast('Redirigiendo al pago... 💳');
}
