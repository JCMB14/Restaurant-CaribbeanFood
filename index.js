const imagenJugo = document.getElementById("imagenJugo"),
  tipoJugo = document.getElementById("tipoJugo");

tipoJugo.addEventListener("change", function () {
  const selectJugo = tipoJugo.value;

  switch (selectJugo) {
    case "maracuya":
      imagenJugo.src =
        "https://www.comidasperuanas.vip/wp-content/uploads/2020/03/jugo-de-maracuya.jpg";
      break;
    case "fresa":
      imagenJugo.src =
        "https://t1.uc.ltmcdn.com/es/posts/8/2/8/como_hacer_jugo_de_fresa_28828_orig.jpg";
      break;
    case "mora":
      imagenJugo.src =
        "https://t2.uc.ltmcdn.com/es/posts/3/3/6/como_hacer_un_batido_de_mora_26633_600_square.jpg";
      break;
    default:
      imagenJugo.src =
        "https://k-listo.com/wp-content/uploads/2020/04/JUGOS_NATURALES.jpg.webp";
  }
});

const imagenGas = document.getElementById("imagenGas"),
  tipoGas = document.getElementById("tipoGas");

tipoGas.addEventListener("change", function () {
  const selectGas = tipoGas.value;

  switch (selectGas) {
    case "cocacola":
      imagenGas.src =
        "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_1.5l_nr_bebidas_liquidas_1024x1024.jpg?v=1620489417";
      break;

    case "manzana":
      imagenGas.src =
        "https://licoresmedellin.com/cdn/shop/products/gaseosa-manzana-postobon-grande-25lgaseosa-manzana-postobon-grande-25lpostobonlicores-medellin-362264.png?v=1681661908&width=1024";
      break;

    case "sprite":
      imagenGas.src =
        "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_sprite_400ml_bebidas_liquidas_1024x1024.jpg?v=1620489364";
      break;

    default:
      imagenGas.src =
        "https://www.telemundo.com/sites/nbcutelemundo/files/images/article/cover/2017/04/24/vaso-de-gaseosa.jpg";
  }
});

const imagenHelado = document.getElementById("imagenHelado"),
  tipoHelado = document.getElementById("tipoHelado");

tipoHelado.addEventListener("change", function () {
  const selectHelado = tipoHelado.value;

  switch (selectHelado) {
    case "vainilla":
      imagenHelado.src =
        "https://s1.abcstatics.com/media/gurmesevilla/2016/07/helado-de-vainilla.jpg";
      break;

    case "chocolate":
      imagenHelado.src =
        "https://www.hogarmania.com/archivos/202208/helado-chocolate-portada3-1280x720x80xX.jpg";
      break;

    case "heladofresa":
      imagenHelado.src =
        "https://sivarious.com/wp-content/uploads/2022/06/helado-de-fresa.jpg";
      break;

    default:
      imagenHelado.src =
        "https://images.hola.com/imagenes/cocina/noticiaslibros/20230412229842/helados-sabores-originales-recetas/1-233-402/helados-varios-adob-t.jpg";
  }
});




const pedidos = [];
const TotalCompra = [0]; 

const valorpollo = (pollo) => pollo * 10000;
const btnpollo = document.getElementById("añadirPollo1");

btnpollo.addEventListener("click", () => {
  let inputpollo = document.getElementById("inputPollo");
  let cantidad = Number(inputpollo.value);
  const totalpedido = valorpollo(cantidad);
  const comida = `Corrientazo de pollo: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});

const valorcerdo = (cerdo) => cerdo * 12000;
const btncerdo = document.getElementById("añadirCerdo");

btncerdo.addEventListener("click", () => {
  let inputcerdo = document.getElementById("inputCerdo");
  let cantidad = Number(inputcerdo.value);
  const totalpedido = valorcerdo(cantidad);
  const comida = `Corrientazo de cerdo: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});

const valorlomo = (lomo) => lomo * 15000;
const btnlomo = document.getElementById("añadirLomo");

btnlomo.addEventListener("click", () => {
  let inputlomo = document.getElementById("inputLomo");
  let cantidad = Number(inputlomo.value);
  const totalpedido = valorlomo(cantidad);
  const comida = `Corrientazo de lomo: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});

const valorcostilla = (costilla) => costilla * 5000;
const btncostilla = document.getElementById("añadirCostilla");

btncostilla.addEventListener("click", () => {
  let inputcostilla = document.getElementById("inputCostilla");
  let cantidad = Number(inputcostilla.value);
  const totalpedido = valorcostilla(cantidad);
  const comida = `Sopa de costilla: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});
const valormondongo = (mondongo) => mondongo * 5000;
const btnmondongo = document.getElementById("añadirMondongo");

btnmondongo.addEventListener("click", () => {
  let inputmondongo = document.getElementById("inputMondongo");
  let cantidad = Number(inputmondongo.value);
  const totalpedido = valormondongo(cantidad);
  const comida = `Sopa de mondongo: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});

const valorqueso = (mondongo) => mondongo * 5000;
const btnqueso = document.getElementById("añadirQueso");

btnqueso.addEventListener("click", () => {
  let inputqueso = document.getElementById("inputMote");
  let cantidad = Number(inputqueso.value);
  const totalpedido = valorqueso(cantidad);
  const comida = `Mote de Queso: ${cantidad} unidades - Total: ${totalpedido} COP`;
  pedidos.push(comida);
  const result = pedidos.join("\n");
  const resultado = parseInt(TotalCompra[0], 10);
  const Total = resultado + totalpedido;
  TotalCompra[0] = Total.toString();
  document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
  alert("Pedido añadido con exito");
});

const valorjugo = (jugo) => jugo * 2000;
const tipojugo = document.getElementById("tipoJugo");
const inputJugos = document.getElementById("inputJugos");
const inputAgua = document.getElementById("inputAgua");
const inputLeche = document.getElementById("inputLeche");
const btnjugo = document.getElementById("añadirJugo");

let jugo_selec = tipojugo.value;
let cantidad = Number(inputJugos.value);
let totalpedido = valorjugo(cantidad);

tipojugo.addEventListener("change", function () {
  jugo_selec = tipojugo.value;
  cantidad = Number(inputJugos.value);
  totalpedido = valorjugo(cantidad);
});

btnjugo.addEventListener("click", function () {
  cantidad = Number(inputJugos.value);
  totalpedido = valorjugo(cantidad);
  switch (jugo_selec) {
    case "maracuya":
      {
        const bebida = inputAgua.checked ? "Agua" : "Leche";
        const comida = `Jugo de Maracuyá en ${bebida}: ${cantidad} unidades - Total: ${totalpedido} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "fresa":
      {
        const bebida = inputAgua.checked ? "Agua" : "Leche";
        const comida = `Jugo de Fresa en ${bebida}: ${cantidad} unidades - Total: ${totalpedido} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "mora":
      {
        const bebida = inputAgua.checked ? "Agua" : "Leche";
        const comida = `Jugo de Mora en ${bebida}: ${cantidad} unidades - Total: ${totalpedido} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    default:
      alert("Por favor seleccione una opción");
  }
});

const valorgaseosa = (gaseosa) => gaseosa * 2500;
const tipogas = document.getElementById("tipoGas");
const inputGas = document.getElementById("inputGas");
const btngaseosa = document.getElementById("añadirGaseosa");

let gaseosa_selec = tipogas.value;
let cantidad_gas = Number(inputGas.value);
let totalpedido_gaseosa = valorgaseosa(cantidad_gas);

tipogas.addEventListener("change", function () {
  gaseosa_selec = tipogas.value;
  cantidad_gas = Number(inputGas.value);
  totalpedido_gaseosa = valorgaseosa(cantidad_gas);
});

btngaseosa.addEventListener("click", function () {
  cantidad_gas = Number(inputGas.value);
  totalpedido_gaseosa = valorgaseosa(cantidad_gas);
  switch (gaseosa_selec) {
    case "cocacola":
      {
        const comida = `Coca-Cola: ${cantidad_gas} unidades - Total: ${totalpedido_gaseosa} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");  const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_gaseosa;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "manzana":
      {
        const comida = `Gaseosa Manzana: ${cantidad_gas} unidades - Total: ${totalpedido_gaseosa} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n"); 
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_gaseosa;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "sprite":
      {
        const comida = `Gaseosa Sprite: ${cantidad_gas} unidades - Total: ${totalpedido_gaseosa} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_gaseosa;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    default:
      alert("Por favor seleccione una opción");
  }
});

const valorhelado = (helado) => helado * 3000;
const tipohelado = document.getElementById("tipoHelado");
const inputHelado = document.getElementById("inputHelado");
const btnhelado = document.getElementById("añadirHelado");

let helado_selec = tipohelado.value;
let cantidad_helao = Number(inputHelado.value);
let totalpedido_helao = valorhelado(cantidad_helao);

tipohelado.addEventListener("change", function () {
  helado_selec = tipohelado.value;
  cantidad_helao = Number(inputHelado.value);
  totalpedido_helao = valorhelado(cantidad_helao);
});

btnhelado.addEventListener("click", function () {
  cantidad_helao = Number(inputHelado.value);
  totalpedido_helao = valorhelado(cantidad_helao);
  switch (helado_selec) {
    case "vainilla":
      {
        const comida = `Helado de vainilla: ${cantidad_helao} unidades - Total: ${totalpedido_helao} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_helao;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "chocolate":
      {
        const comida = `Helado de chocolate: ${cantidad_helao} unidades - Total: ${totalpedido_helao} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_helao;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    case "heladofresa":
      {
        const comida = `Helado de fresa: ${cantidad_helao} unidades - Total: ${totalpedido_helao} COP`;
        pedidos.push(comida);
        const result = pedidos.join("\n");
        const resultado = parseInt(TotalCompra[0], 10);
        const Total = resultado + totalpedido_helao;
        TotalCompra[0] = Total.toString();
        document.getElementById("content_detalles").innerText = result + "\n" + `Total de pedidos: ${Total} COP`;
        alert("Pedido añadido con exito");
      }
      break;

    default:
      alert("Por favor seleccione una opción");
  }
});
const generarpedido = document.getElementById("btn_recibo");
generarpedido.addEventListener("click", function(){
 //   const datos = document.getElementById("content_detalles_usuario");
    const datos_pedidos = document.getElementById("content_detalles");
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("direccion");
    sessionStorage.removeItem("telefono");
    datos_pedidos.innerText = "";
    alert("PAGO REALIZADO");
    setTimeout(() => {
      location.reload();
    }, 100);
});