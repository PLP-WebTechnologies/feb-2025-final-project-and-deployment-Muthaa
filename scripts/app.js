document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const productContainer = document.getElementById('product-list');
    const filter = document.getElementById('category');
  
    // Setup cart
    let cart = [];
    try {
      const stored = JSON.parse(localStorage.getItem('cart'));
      if (Array.isArray(stored)) {
        cart = stored;
      }
    } catch (err) {
      cart = [];
    }
  
    // Toast handler
    function showToast(message) {
      let toast = document.getElementById('toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
  
    function updateCartDisplay() {
      if (cartCount && Array.isArray(cart)) {
        const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        cartCount.textContent = total;
      }
    }
  
    function addToCart(productId) {
      const existing = cart.find(item => item.id === productId);
      if (existing && typeof existing.quantity === 'number') {
        existing.quantity += 1;
      } else if (existing) {
        existing.quantity = 1; // fallback
      } else {
        cart.push({ id: productId, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDisplay();
  
      const product = products.find(p => p.id === productId);
      if (product) showToast(`✅ ${product.name} added to cart`);
      else showToast('✅ Item added to cart');
    }
  
    function renderProducts(filterValue = "all") {
      if (!productContainer) return;
  
      productContainer.innerHTML = '';
      const filtered = filterValue === "all"
        ? products
        : products.filter(p => p.category === filterValue);
  
      filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
  
        card.innerHTML = `
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
          </a>
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
  
        productContainer.appendChild(card);
      });
  
      // Bind buttons
      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
          const id = parseInt(button.getAttribute('data-id'));
          addToCart(id);
        });
      });
    }
  
    function renderCartPage() {
      const cartItemsContainer = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');
  
      if (!cartItemsContainer || !cartTotal) return;
  
      cartItemsContainer.innerHTML = '';
      let total = 0;
      let count = 0;
  
      cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
  
        const itemTotal = item.quantity * product.price;
        total += itemTotal;
        count += item.quantity;
  
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="width:80px;" />
          <div>
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)} × 
              <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="qty-input">
              = $${itemTotal.toFixed(2)}
            </p>
            <button data-id="${item.id}" class="remove-btn">Remove</button>
          </div>
        `;
        cartItemsContainer.appendChild(div);
      });
  
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = count;
      localStorage.setItem('cart', JSON.stringify(cart));
  
      cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
          const id = parseInt(e.target.dataset.id);
          cart = cart.filter(item => item.id !== id);
          renderCartPage();
          updateCartDisplay();
        }
      });
  
      cartItemsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('qty-input')) {
          const id = parseInt(e.target.dataset.id);
          const newQty = parseInt(e.target.value);
          const item = cart.find(item => item.id === id);
          if (item && newQty >= 1) {
            item.quantity = newQty;
            renderCartPage();
            updateCartDisplay();
          }
        }
      });
    }
  
    // Theme toggle
    const darkToggle = document.getElementById('dark-mode-toggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      });
  
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
      }
    }
  
    filter?.addEventListener('change', (e) => {
      renderProducts(e.target.value);
    });
  
    renderProducts();
    renderCartPage();
    updateCartDisplay();
  });
  