// ── Lineales del supermercado ──
// Para añadir un producto: "nombre": "Lineal"
// Lineales disponibles: Carnes | Pescados | Congelados | Huevos y lácteos | Fruta y verdura | Despensa | Otros

const LINEALES = ["Carnes","Pescados","Congelados","Huevos y lácteos","Fruta y verdura","Despensa","Otros"];

// Productos fijos de desayuno (aparecen siempre en la lista)
const DESAYUNO_COMPRA = [
  { n: "Pavo cocido",  key: "fijo_pavo_cocido" },
  { n: "Yogur griego", key: "fijo_yogur_griego" },
  { n: "Plátanos", key: "fijo_platanos" },
  { n: "Naranjas de zumo", key: "fijo_naranjas" },
  { n: "Arándanos", key: "fijo_arandanos" },
  { n: "Aguacate", key: "fijo_aguacate" },
  { n: "Wasa Sesam", key: "fijo_wasa" },
];

const LINEAL_MAP = {
  // Carnes
  "pollo":"Carnes","pavo":"Carnes","ternera":"Carnes","cerdo":"Carnes","lomo":"Carnes",
  "solomillo":"Carnes","jamón":"Carnes","jamon":"Carnes","lacón":"Carnes","lacon":"Carnes",
  "hamburguesa":"Carnes","carne":"Carnes","pechuga":"Carnes","contramuslo":"Carnes",
  // Pescados
  "merluza":"Pescados","salmón":"Pescados","salmon":"Pescados","bacalao":"Pescados",
  "gambas":"Pescados","gamba":"Pescados","sepia":"Pescados","atún":"Pescados","atun":"Pescados",
  "pescado":"Pescados","sardina":"Pescados","boquerón":"Pescados","boqueron":"Pescados",
  "anchoa":"Pescados","caballa":"Pescados","dorada":"Pescados","lubina":"Pescados",
  "trucha":"Pescados","pulpo":"Pescados","mejillón":"Pescados","mejillon":"Pescados",
  "calamar":"Pescados","rape":"Pescados","rodaballo":"Pescados","lenguado":"Pescados",
  "cazón":"Pescados","cazon":"Pescados","besugo":"Pescados","mero":"Pescados",
  "abadejo":"Pescados","pescadilla":"Pescados","fletán":"Pescados","fletan":"Pescados",
  // Huevos y lácteos
  "huevo":"Huevos y lácteos","huevos":"Huevos y lácteos","mozzarella":"Huevos y lácteos",
  "queso":"Huevos y lácteos","yogur":"Huevos y lácteos","cottage":"Huevos y lácteos",
  "leche":"Huevos y lácteos","parmesano":"Huevos y lácteos","mantequilla":"Huevos y lácteos",
  "kéfir":"Huevos y lácteos","nata":"Huevos y lácteos",
  // Fruta y verdura
  "mango":"Fruta y verdura","plátano":"Fruta y verdura","platano":"Fruta y verdura",
  "naranja":"Fruta y verdura","manzana":"Fruta y verdura","pera":"Fruta y verdura",
  "kiwi":"Fruta y verdura","fresa":"Fruta y verdura","sandía":"Fruta y verdura",
  "sandia":"Fruta y verdura","melón":"Fruta y verdura","melon":"Fruta y verdura",
  "piña":"Fruta y verdura","pina":"Fruta y verdura","cereza":"Fruta y verdura",
  "uva":"Fruta y verdura","arándano":"Fruta y verdura","arandano":"Fruta y verdura",
  "frambuesa":"Fruta y verdura","melocotón":"Fruta y verdura","melocoton":"Fruta y verdura",
  "brócoli":"Fruta y verdura","brocoli":"Fruta y verdura","calabacín":"Fruta y verdura",
  "calabacin":"Fruta y verdura","espinaca":"Fruta y verdura","espinacas":"Fruta y verdura",
  "tomate":"Fruta y verdura","cebolla":"Fruta y verdura","pimiento":"Fruta y verdura",
  "lechuga":"Fruta y verdura","rúcula":"Fruta y verdura","rucula":"Fruta y verdura",
  "canónigos":"Fruta y verdura","canonigos":"Fruta y verdura","zanahoria":"Fruta y verdura",
  "berenjena":"Fruta y verdura","calabaza":"Fruta y verdura","espárrago":"Fruta y verdura",
  "esparrago":"Fruta y verdura","judía":"Fruta y verdura","judia":"Fruta y verdura",
  "alcachofa":"Fruta y verdura","acelga":"Fruta y verdura","puerro":"Fruta y verdura",
  "coliflor":"Fruta y verdura","champiñón":"Fruta y verdura","champinon":"Fruta y verdura",
  "champiñones":"Fruta y verdura","seta":"Fruta y verdura","aguacate":"Fruta y verdura",
  "cherry":"Fruta y verdura","cherrys":"Fruta y verdura","maíz":"Fruta y verdura",
  "maiz":"Fruta y verdura","patata":"Fruta y verdura","pisto":"Fruta y verdura",
  "pepino":"Fruta y verdura","apio":"Fruta y verdura","remolacha":"Fruta y verdura",
  "verdura":"Fruta y verdura","fruta":"Fruta y verdura","mix de verduras":"Fruta y verdura",
  // Despensa
  "arroz":"Despensa","pasta":"Despensa","noodles":"Despensa","wasa":"Despensa",
  "tortita":"Despensa","couscous":"Despensa","avena":"Despensa","pan":"Despensa",
  "lenteja":"Despensa","lentejas":"Despensa","garbanzo":"Despensa","garbanzos":"Despensa",
  "alubia":"Despensa","aove":"Despensa","aceite":"Despensa",
  "tomate frito":"Despensa","caldo":"Despensa","consomé":"Despensa","consome":"Despensa",
  "soja":"Despensa","sésamo":"Despensa","sesamo":"Despensa","pimentón":"Despensa",
  "pimenton":"Despensa","frutos secos":"Despensa","almendra":"Despensa",
  "nuez":"Despensa","anacardo":"Despensa","pistacho":"Despensa","cacahuete":"Despensa",
  "avellana":"Despensa","vinagre":"Despensa","mostaza":"Despensa","sal":"Despensa",
  "pimienta":"Despensa","ajo":"Despensa","especias":"Despensa","limón":"Despensa",
  "limon":"Despensa"
};

function clasificarLineal(nombre) {
  const n = nombre.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (/congelad[ao]s?/.test(n)) return "Congelados";
  for (const [key, lineal] of Object.entries(LINEAL_MAP)) {
    const k = key.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (n.includes(k)) return lineal;
  }
  return "Otros";
}
