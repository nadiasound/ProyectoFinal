const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};
const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 999 },
    { id: 2, titulo: "Remera Puma", precio: 222 },
    { id: 3, titulo: "Pantalon Adidas", precio: 111 },
    { id: 4, titulo: "Airmax", precio: 1982 },
    { id: 5, titulo: "Jagguar", precio: 321 },
    { id: 6, titulo: "Chancla", precio: 733 },
];
generarCards (productos);

function generarCards(productosAMostrar) {
        let acumuladorDeCards = ``;
            productosAMostrar.forEach((elementoDelArray) => {
                acumuladorDeCards += `<div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        < />!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                < />!-- Product name-->
                                <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                                < />!-- Product price-->
                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                $${elementoDelArray.precio}
                            </div>
                        </div>
                        < />!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </div>
                    </div>
                </div>`;
            });
            
            mostrarCardsEnElHTML(acumuladorDeCards);
        }
        
     

        function mostrarCardsEnElHTML(cards) {
            document.getElementById("listado-productos").innerHTML(cards);
        }; 