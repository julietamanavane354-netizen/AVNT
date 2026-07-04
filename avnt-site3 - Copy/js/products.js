/* AVNT — product catalogue (single source of truth for shop.html + product.html) */
const AVNT_PRODUCTS = [
  {
    id: "arg-tee",
    capsule: "argentina",
    capsuleLabel: "Argentina",
    name: "Argentina Tee",
    type: "T-shirt",
    price: 1499,
    images: ["img/argentina-front.jpeg", "img/argentina-back.jpg"],
    desc: "Algodão pesado, corte solto, bordado tonal do brasão AVNT. Construída para durar, não para uma época.",
    details: ["Fit: oversized, straight", "100% algodão penteado, 260g", "Serigrafia + bordado tonal", "Lavar a frio, do avesso"]
  },
  {
    id: "arg-pants",
    capsule: "argentina",
    capsuleLabel: "Argentina",
    name: "Argentina Pants",
    type: "Sweatpants",
    price: 1899,
    images: ["img/argentina-pants.jpg"],
    desc: "Moletom estruturado em tom cru, cintura elástica com cordão, brasão gravado em relevo tonal.",
    details: ["Fit: straight, tornozelo solto", "Moletom premium, 320g", "Bolsos laterais reforçados", "Lavar a frio, do avesso"]
  },
  {
    id: "bra-tee",
    capsule: "brasil",
    capsuleLabel: "Brasil",
    name: "Brasil Tee",
    type: "T-shirt",
    price: 1499,
    images: ["img/brazil-front.png", "img/brazil-back.png"],
    desc: "Verde profundo, brasão a dourado com cinco estrelas. A peça mais cobiçada da capsule.",
    details: ["Fit: oversized, straight", "100% algodão penteado, 260g", "Estampa dourada de alta durabilidade", "Lavar a frio, do avesso"]
  },
  {
    id: "bra-pants",
    capsule: "brasil",
    capsuleLabel: "Brasil",
    name: "Brasil Pants",
    type: "Sweatpants",
    price: 1899,
    images: ["img/brazil-pants.png"],
    desc: "Moletom em verde-floresta, brasão gravado em relevo tonal com estrelas na perna.",
    details: ["Fit: straight, tornozelo solto", "Moletom premium, 320g", "Bolsos laterais reforçados", "Lavar a frio, do avesso"]
  },
  {
    id: "esp-tee",
    capsule: "espanha",
    capsuleLabel: "Espanha",
    name: "Espanha Tee",
    type: "T-shirt",
    price: 1499,
    images: ["img/spain-front.png", "img/spain-back.png"],
    desc: "Marrom espresso, coroa dourada. A capsule mais premium — feita para durar mais que uma temporada.",
    details: ["Fit: oversized, straight", "100% algodão penteado, 260g", "Estampa dourada de alta durabilidade", "Lavar a frio, do avesso"]
  },
  {
    id: "esp-pants",
    capsule: "espanha",
    capsuleLabel: "Espanha",
    name: "Espanha Pants",
    type: "Sweatpants",
    price: 1899,
    images: ["img/spain-pants.png"],
    desc: "Moletom espresso com brasão de coroa gravado em tom sobre tom.",
    details: ["Fit: straight, tornozelo solto", "Moletom premium, 320g", "Bolsos laterais reforçados", "Lavar a frio, do avesso"]
  }
];

const AVNT_SETS = [
  { id:"set-argentina", capsule:"argentina", capsuleLabel:"Argentina", name:"Set Completo Argentina", price:2999, oldPrice:3398, image:"img/set-argentina.png" },
  { id:"set-brasil", capsule:"brasil", capsuleLabel:"Brasil", name:"Set Completo Brasil", price:2999, oldPrice:3398, image:"img/set-brasil.png" },
  { id:"set-espanha", capsule:"espanha", capsuleLabel:"Espanha", name:"Set Completo Espanha", price:2999, oldPrice:3398, image:"img/set-espanha.png" }
];

const AVNT_WHATSAPP = "258875958636";

function avntWaLink(text){
  return `https://wa.me/${AVNT_WHATSAPP}?text=${encodeURIComponent(text)}`;
}
function avntFormatPrice(n){
  return n.toLocaleString('pt-PT') + " MT";
}
