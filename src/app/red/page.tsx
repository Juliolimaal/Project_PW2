'use client'; // Necessário para hooks e interações

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Head from 'next/head';

export default function WineRed() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Lógica do carrinho (adaptada do js/cart.js)
    const cartIcon = document.getElementById('cart-icon');
    const cartPanel = document.getElementById('cart-panel');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');
    const cartCount = document.getElementById('cart-count');
    const topWineMsg = document.getElementById('top-wine-msg');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    function updateCart() {
      cartItems.innerHTML = '';
      total = 0;
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center';
        li.innerHTML = `
          <span>${item.name} - R$ ${item.price}</span>
          <button class="remove-item text-red-500" data-index="${index}">Remover</button>
        `;
        cartItems.appendChild(li);
        total += parseFloat(item.price);
      });
      cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
      cartCount.textContent = cart.length;
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCart();
    }

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const name = e.target.dataset.name;
        const price = e.target.dataset.price;
        addToCart(name, price);
      }
      if (e.target.classList.contains('remove-item')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
      }
    });

    cartIcon.addEventListener('click', () => {
      cartPanel.classList.toggle('translate-x-[calc(100%+2rem)]');
    });

    closeCartBtn.addEventListener('click', () => {
      cartPanel.classList.add('translate-x-[calc(100%+2rem)]');
    });

    clearCartBtn.addEventListener('click', () => {
      cart = [];
      updateCart();
    });

    updateCart(); // Inicializar
  }, []);

  return (
    <>
      <Head>
        <title>Wine Red</title>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-around items-center bg-white h-[15vh] font-lexend">
        <Link href="/" className="text-[#8C3A42] no-underline transition duration-300 logo text-2xl uppercase tracking-[4px] hover:scale-110" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="500">
          w<span className="text-3xl">W</span>w
        </Link>
        <ul className="hidden md:flex list-none" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="500">
          <li className="relative tracking-[3px] ml-12 after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-[#8C3A42] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/" className="text-[#8C3A42]">home</Link>
          </li>
          <li className="relative tracking-[3px] ml-12 after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-[#8C3A42] after:transition-all after:duration-300 hover:after:w-full">
            <a href="#" className="text-[#8C3A42]">contato</a>
          </li>
          <li className="relative tracking-[3px] ml-12 after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-[#8C3A42] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/" className="text-[#8C3A42]">saiba mais</Link>
          </li>
          <li className="relative tracking-[3px] ml-12 after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-[#8C3A42] after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/" className="text-[#8C3A42]">comprar</Link>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" id="mobile-menu" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="500">
          <div className="w-8 h-0.5 bg-[#8C3A42] mb-2 transition-all"></div>
          <div className="w-8 h-0.5 bg-[#8C3A42] mb-2 transition-all"></div>
          <div className="w-8 h-0.5 bg-[#8C3A42] transition-all"></div>
        </div>
        <div className="relative cursor-pointer" id="cart-icon" title="Ver carrinho">
          <span className="material-symbols-outlined text-[#8C3A42] text-3xl">shopping_cart</span>
          <span id="cart-count" className="absolute -top-2 -right-2 bg-[#8C3A42] text-white text-xs rounded-full px-2 py-px">0</span>
        </div>
      </nav>

      <ul id="nav-list" className="hidden md:hidden flex-col items-center justify-around bg-white absolute top-[15vh] right-0 w-screen h-[85vh] transform translate-x-full transition-transform duration-300">
        <li className="mr-12 opacity-0 transition-opacity duration-300"><a href="#" className="text-[#8C3A42]">Home</a></li>
        <li className="mr-12 opacity-0 transition-opacity duration-300"><a href="#" className="text-[#8C3A42]">Sobre</a></li>
      </ul>

      {/* Header */}
      <header className="flex flex-col items-center h-[700px]">
        <div className="flex items-center justify-center" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
          <div className="h-[100px] w-px bg-gradient-to-t from-[#8C3A42] to-white"></div>
        </div>
        <h1 className="font-ibarra font-semibold text-9xl text-center text-[#8C3A42] mt-5 mb-2.5 animate-aparecer 2xl:text-[200px]" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">Red</h1>
        <p className="font-lexend text-base w-[500px] font-normal text-center text-[#8C3A42] mb-5 animate-aparecer" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">Envelhece em barricas de carvalho e garrafa, ganhando suavidade, complexidade e aromas elegantes com o tempo.</p>
        <p className="font-lexend text-base w-[450px] font-normal text-center text-[#8C3A42] mb-5 animate-aparecer" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">De cor rubi profunda, revela aromas de frutas maduras e especiarias. Encorpado e equilibrado, possui taninos aveludados e final elegante.</p>
      </header>

      {/* Main */}
      <main>
        {/* First Section */}
        <section className="first">
          <div className="flex justify-around px-0 lg:px-24 md:px-5">
            <div className="w-[130px] h-[130px] md:w-[180px] md:h-[180px] flex flex-col justify-center items-center bg-[#8C3A42] text-white font-['Lexend_Exa'] text-lg rounded-full mb-12 transition duration-500 hover:-translate-y-2.5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
              <span className="material-symbols-outlined text-5xl">nutrition</span>
              <p>fresco</p>
            </div>
            <div className="w-[130px] h-[130px] md:w-[180px] md:h-[180px] flex flex-col justify-center items-center bg-[#8C3A42] text-white font-['Lexend_Exa'] text-lg rounded-full mb-12 transition duration-500 hover:-translate-y-2.5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="100">
              <span className="material-symbols-outlined text-5xl">psychiatry</span>
              <p>suave</p>
            </div>
            <div className="w-[130px] h-[130px] md:w-[180px] md:h-[180px] flex flex-col justify-center items-center bg-[#8C3A42] text-white font-['Lexend_Exa'] text-lg rounded-full mb-12 transition duration-500 hover:-translate-y-2.5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="200">
              <span className="material-symbols-outlined text-5xl">cloud</span>
              <p>leve</p>
            </div>
          </div>
          <div className="mx-8 flex flex-col lg:flex-row justify-center items-center gap-16">
            <div className="flex flex-col items-center lg:items-start font-['Lexend_Exa'] w-[455px] md:w-[500px] order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <h2 className="font-['Ibarra_Real_Nova'] text-6xl font-extrabold">Red Wine Alesia</h2>
              <h3 className="text-[#8C3A42] text-xl font-normal m-2.5">Profundidade e elegância em sintonia</h3>
              <p className="font-light mb-5 text-justify text-sm md:text-base">
                De cor rubi intensa e brilhante, Alesia revela aromas envolventes de frutas vermelhas maduras, notas sutis de especiarias e um delicado toque de carvalho. Encorpado e equilibrado, apresenta taninos aveludados e um final prolongado e harmonioso. Ideal para momentos especiais e harmonizações com carnes, massas e queijos curados.
              </p>
              <div className="flex gap-5 md:gap-10">
                <div className="flex gap-2.5 bg-[#8C3A42] text-white px-8 py-2.5 transition duration-500 hover:bg-white hover:text-[#8C3A42] hover:border hover:border-[#8C3A42] add-to-cart-btn cursor-pointer" data-name="Red Wine Alesia" data-price="899.99">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <a>comprar</a>
                </div>
                <div className="group flex gap-2.5 text-[#8C3A42] px-8 py-2.5 transition-all duration-500">
                  <span className="material-symbols-outlined">reviews</span>
                  <a className="transition-all duration-500 group-hover:tracking-[3px]">avaliações</a>
                </div>
              </div>
            </div>
            <div className="img-brisa order-1 lg:order-2" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <img src="/images/image-wine-red-alesia.png" alt="Red Wine Alesia" loading="lazy" className="max-w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="second">
          <div className="flex flex-col justify-center items-center mt-[60px]" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
            <h2 className="w-[450px] font-['Ibarra_Real_Nova'] text-[40px] text-center text-[#8C3A42] md:w-[700px] md:text-[50px]">A maioria dos nossos vinhos possuem selo DOCG</h2>
            <div className="mt-[30px] flex justify-center items-center w-[200px] h-[200px] border-[3px] border-[#8C3A42] rounded-full transition duration-500 hover:-translate-y-2.5">
              <p className="font-['Lexend_Exa'] text-[#8C3A42] text-[30px]">D.O.C.G</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mx-[30px] mt-[30px] mb-[60px] md:flex-col md:items-center md:gap-5 md:mx-[30px] md:my-[30px] md:mb-[60px] lg:flex-row lg:justify-start lg:items-center lg:gap-[60px] lg:mx-[50px] lg:mt-[30px] lg:mb-[100px] 2xl:mx-[200px]">
            <div className="img-alvorecer" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <img src="/images/image-wine-red-larnache.png" alt="Larnache" />
            </div>
            <div className="flex flex-col items-center w-[450px] font-['Lexend_Exa'] md:items-center md:w-[502px] lg:items-start lg:w-[502px]" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <h2 className="font-['Ibarra_Real_Nova'] text-[50px] font-extrabold md:text-[60px] lg:text-[60px]">Larnache</h2>
              <h3 className="text-[#8C3A42] text-[20px] font-normal m-2.5">Intensidade de sabor</h3>
              <p className="text-[14px] font-light mb-5 text-justify md:text-base lg:text-base">
                De coloração rubi profunda com reflexos violáceos, Larnache revela aromas envolventes de frutas vermelhas maduras, como amora e framboesa, mescladas a sutis notas de chocolate e especiarias. No paladar, é encorpado e aveludado, com taninos macios e acidez equilibrada. Seu final é longo e harmonioso, ideal para acompanhar carnes grelhadas, queijos curados e momentos de puro prazer.
              </p>
              <div className="flex gap-5 md:gap-10 lg:gap-10">
                <div className="flex gap-2.5 bg-[#8C3A42] text-white px-8 py-2.5 transition duration-500 hover:bg-white hover:text-[#8C3A42] hover:border hover:border-[#8C3A42] add-to-cart-btn cursor-pointer" data-name="Larnache" data-price="999.99">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <a>comprar</a>
                </div>
                <div className="flex gap-2.5 text-[#8C3A42] px-[30px] py-2.5 transition duration-500 hover:tracking-[3px]">
                  <span className="material-symbols-outlined">reviews</span>
                  <a className="transition-all duration-500 group-hover:tracking-[3px]">avaliações</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="third">
          <div className="flex flex-col justify-center items-center gap-5 mx-[30px] mb-[100px] mt-0 lg:flex-row lg:justify-end lg:items-center lg:gap-[60px] lg:mx-[50px] lg:my-[60px] lg:mb-[100px] 2xl:mx-[200px]">
            <div className="img-regia order-1 lg:order-0" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <img src="/images/image-wine-red-vitalo.png" alt="Vitalo" />
            </div>
            <div className="flex flex-col items-center w-[455px] font-['Lexend_Exa'] order-2 lg:items-start lg:w-[500px]" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
              <h2 className="font-['Ibarra_Real_Nova'] text-[60px] font-extrabold">Vitalo Vermelho</h2>
               <h3 className="text-[#8C3A42] text-[20px] font-normal m-2.5">Um brinde ao vermelho que desperta sentidos</h3>
          <p class="font-light mb-5 text-justify text-[14px] lg:text-base">
            De tom rubi intenso com reflexos violáceos, Vitalo exala aromas de frutas vermelhas maduras, como morango e amora, 
            entrelaçados a sutis notas de cacau e especiarias. No paladar, revela corpo médio e textura aveludada, equilibrando frescor e intensidade. 
            Seu final é longo e marcante, ideal para acompanhar massas encorpadas, queijos curados e momentos de celebração.
          </p>
          <div class="flex gap-5alg:gap-10">
            <div 
            class="flex gap-2.5 bg-[#8C3A42] text-white px-8 py-2.5 transition duration-500 hover:bg-white hover:text-[#8C3A42] hover:border hover:border-[#8C3A42] ... add-to-cart-btn cursor-pointer"
              data-name="Vitalo Vermelho" 
              data-price="2300.00">
                <span class="material-symbols-outlined">shopping_bag</span>
                <a>comprar</a>
            </div>
            <div class="flex gap-2.5 text-[#8C3A42] px-[30px] py-2.5 transition duration-500 hover:tracking-[3px]">
              <span class="material-symbols-outlined">reviews</span>
              <a class="transition-all duration-500 group-hover:tracking-[3px]">avaliações</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full max-w-6xl mx-auto md:mt-0 mt-12 mb-24 px-4 flex items-center justify-center" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="linear" data-aos-delay="300">
      <div class="w-full lg:w-910px md:w-700px sm:w-450px mx-auto p-12 bg-white rounded-3xl shadow-lg">
        <h2 class="font-ibarra text-4xl md:text-3xl sm:text-2xl">Formulário de Recomendação Personalizada</h2>
        <p class="font-lexend sm:text-sm">Preencha os campos abaixo para receber recomendações personalizadas de vinhos por e-mail.</p>
        
        <form action="#" method="POST">
          <div class="mt-10">
            <label for="nome" class="font-lexend sm:text-sm">Nome</label>
            <div>
              <input type="text" id="nome" name="nome" required 
                   class="w-full p-2 border border-gray-300 rounded mt-1">
            </div>
          </div>
          
          <div class="mt-10 mb-20">
            <label for="email" class="font-lexend sm:text-sm">E-mail</label>
            <div>
              <input type="email" id="email" name="email" required 
                   class="w-full p-2 border border-gray-300 rounded mt-1">
            </div>
          </div>
          
          <div class="mb-20">
            <span class="font-lexend sm:text-sm">Prefere vinhos doces ou secos?</span>
            <div class="mt-10 radio-custom">
              <div>
                <input type="radio" id="doce" name="tipo_vinho" value="doce" class="mr-2">
                <label for="doce" class="font-lexend sm:text-sm">Doces</label>
              </div>
              <div>
                <input type="radio" id="seco" name="tipo_vinho" value="seco" class="mr-2">
                <label for="seco" class="font-lexend sm:text-sm">Secos</label>
              </div>
            </div>
          </div>
          
          <div class="mb-20">
            <span class="font-lexend sm:text-sm">Gosta de acidez mais presente ou equilibrada?</span>
            <div class="mt-10 radio-custom">
              <div>
                <input type="radio" id="presente" name="acidez" value="presente" class="mr-2">
                <label for="presente" class="font-lexend sm:text-sm">Mais presente</label>
              </div>
              <div>
                <input type="radio" id="equilibrada" name="acidez" value="equilibrada" class="mr-2">
                <label for="equilibrada" class="font-lexend sm:text-sm">Equilibrada</label>
              </div>
            </div>
          </div>
          
          <div class="mb-20">
            <label for="vinho_favorito" class="font-lexend sm:text-sm">Algum vinho vermelho favorito atual?</label>
            <div>
              <input type="text" id="vinho_favorito" name="vinho_favorito" 
                   class="w-full p-2 border border-gray-300 rounded mt-1">
            </div>
          </div>
          
          <div>
            <button type="submit" 
                  class="font-lexend bg-[#8C3A42] hover:bg-[#888b2c] text-white py-2 px-5 border-none cursor-pointer transition duration-500">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  <footer class="h-[650px] bg-[#0f0510] text-white flex flex-col items-center pt-24 pb-5 relative z-10">
    <div class="font-['Lexend_Exa'] -mb-10">Próxima Família</div>
    <a href="../../src/pages/wine_rose.html" class="group relative flex items-center justify-between text-white no-underline px-10 py-5 uppercase tracking-wider text-sm font-['Lexend_Exa'] bottom-[-390px] z-20 overflow-hidden">
      <span class="relative z-10">Saiba Mais</span>
      <span class="absolute inset-0 bg-[#DF587D] transition-all duration-300 ease-in-out"></span>
      <span class="absolute inset-0 bg-[#B23D56] transform translate-x-full transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
    </a>
    <div class="wine-image relative z-10">
      <img width="125px" src="../../public/images/wine-rose-copy.png" alt="Calem Porto Rosé Wine" class="opacity-80">
    </div>
    <div class="text-[200px] font-['Ibarra_Real_Nova'] font-extrabold text-[#DF587D] absolute top-20 z-0">Rosé</div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    // Inicializar AOS com configurações personalizadas
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
  </script>
  <!-- Painel do Carrinho -->
<div id="cart-panel"
     class="fixed right-8 top-28 w-75 max-h-[70vh] h-auto bg-white shadow-2xl p-5 rounded-lg transform translate-x-[calc(100%+2rem)] transition-transform duration-300 z-50 overflow-y-auto">
     <button id="close-cart-btn" class="absolute top-4 right-5 text-gray-600 text-2xl hover:text-gray-900">&times;</button>
  <h2 class="text-2xl font-lexend mb-4 text-[#8C3A42]">Carrinho</h2>
  
  <p id="top-wine-msg" class="text-sm text-[#8C3A42] font-semibold mb-3 hidden"></p>
  
  <ul id="cart-items" class="space-y-3"></ul>
  <div class="border-t border-gray-300 mt-4 pt-4">
    <p id="cart-total" class="text-lg font-semibold">Total: R$ 0,00</p>
    <button id="clear-cart"
            class="mt-4 bg-[#8C3A42] text-white px-4 py-2 rounded hover:bg-[#9e5159] transition duration-300">
      Esvaziar carrinho
    </button>
  </div>
</div>
    <script type="module">
      import '../js/cart.js';
    </script>
</body>
</html>