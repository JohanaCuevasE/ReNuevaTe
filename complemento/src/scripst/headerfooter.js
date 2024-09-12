const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
        <nav class="topnav">
            <a href="" class="log" id="el-logo">
                <img height="65" width="65" src="../../../public/imagenes/Logo-sin-fondo.png" alt="Logo"> </a>
            <div class="search-container">
                <img src="../../../public/imagenes/lupa.svg" alt="Icono de búsqueda" class="search-icon">
                <input type="search" placeholder="Encuentra tu estilo o descubre tu esencia" id="Buscador" />
            </div>
            <button class="open-menu" aria-label="Cerrar Ménu"><img src="../../../public/imagenes/hamburger-icon.svg"
                    alt="cerrar menu"></button>
            <ul class="menu">
                <button class="close-menu"><img src="../../../public/imagenes/close-icon.svg" alt=""></button>
                <li>
                    <div class="search-container" id="buscador2">
                        <img src="../../../public/imagenes/lupa.svg" alt="Icono de búsqueda" class="search-icon">
                        <input type="search" placeholder="   Encuentra tu estilo" id="Buscador" />
                    </div>
                </li>
                <li class="li-nav"><a href="../../../index.html">Inicio</a></li>
                <li class="li-nav"><a href="./sobreNosotrxs.html">Sobre Nosotres</a></li>
                <li class="li-nav"><a href="./categorias.html">Catálogo</a></li>
                <li class="li-nav"><a href="./inicioDeSesion.html">Iniciar Sesión</a></li>
                <li class="li-nav shopping-cart" id="carrito">
                    <img class="bag" width="30px" height="30px" src="../../../public/imagenes/bolsa.svg" alt="">
                    <div class="buy-card">
                        <ul class="container-cart-products">
                            <li class="l1">Producto</li>
                            <li class="l1">Nombre</li>
                            <li class="l1">Precio</li>
                            <li class="l1">Cantidad</li>
                            <li class="l1"></li>
                        </ul>
                        <div class="lista_de_cursos">
                        </div>
                        <button id="vaciar_carrito" class="clean-btn">Vaciar Carrito</button>
                        <button class="clean-btn"><a href="../pages/detEnvMetPag.html">
                                Comprar ahora</a>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>

`;

footer.innerHTML=`
        <div class="contenedorPieDePagina">
            <img id="logoPieDePagina" src="../../../public/imagenes/LogoRopaReNuevaFooter.png" alt="Logo de Ropa ReNueva">
            <div class="contenedorComentariosContactanosBoton">
                <div style="border-radius: 8px;" class="contenedorComentariosContactanos">
                    <div class="contactanosFooter">
                        <img src="../../../public/imagenes/envelope (1).svg" alt="Logo de carta"
                            style="padding-right: 5px">
                        <h3 style="font-size: 18px" style="padding-left: 12px ; margin-top: 10%;">
                            <a href="./contactanos.html" rel=".">
                                Contáctanos
                            </a>
                        </h3>
                    </div>
                    <div class="comentariosFooter">
                        <img src="../../../public/imagenes/chat-fill.svg" alt="Logo de globo de texto"
                            style="padding-right: 5px">
                        <h3 style="font-size: 18px" style="padding-left: 12px; padding-top: 5px;">
                            <a href="./comentarios.html" rel=".">
                                Comentarios
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="enlacesPieDePagina">
                <div class="contenedorEnlaces">
                    <h3><a href="./sobreNosotrxs.html" id="enlacesFooter">Sobre Nosotres</a></h3>
                    <h3><a href="./catalogo.html" id="enlacesFooter">Catálogo</a></h3>
                    <h3><a href="../../../index.html" id="enlacesFooter">Inicio</a></h3>
                </div>
                <div class="contenedorEnlaces">
                    <h3><a href="./inicioDeSesion.html" id="enlacesFooter">Iniciar Sesión</a></h3>
                    <h3><a href="./carrito.html" id="enlacesFooter">Mi carrito</a></h3>
                </div>
            </div>
        </div>
        </div>
        </div>

`