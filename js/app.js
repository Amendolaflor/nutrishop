$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// EFECTO EN SCROLLING

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

/// RECORRO EL ARRAY DE TODOS LOS PRODUCTOS
for (let food of dataFood) {
  crearFichaProducto(food);
}

/// FUNCION PARA RENDERIZAR FICHAS DE CADA PRODUCTO POR MEDIO DEL DOM
function crearFichaProducto(food) {
  let cont_father = document.getElementById("contenidoGenerado");
  let cont_child = document.createElement("div");
  cont_child.innerHTML = `<div class="container">
                            <div class="card-deck">
                              <div class="col-lg-8 card-area">
                                <div class="card" style="width:18rem" id="ficha">
                                <img src="${food.image}" class="imagenes" alt="Card image cap">  
                                <div class="card-body text-center">
                                  <h5> ${food.name} </h5>
                                   <hr>
                                  <p> Descripcion: ${food.description}</p>                                                                                                
                                    <h6>$ ${food.price} </h6>                       
                                  <button type="button" id=${food.id} class="btn btn-danger btn-sm mr-1 mb-2">
                                    <i class="fas fa-shopping-cart pr-2"></i>Comprar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>`;

  cont_father.appendChild(cont_child);
}
