import p1_img from "./clothe1.jpg";
import p2_img from "./clothe2.jpg";
import p3_img from "./clothe3.jpg";
import p4_img from "./clothe4.jpg";
import p5_img from "./clothe5.jpg";
import p6_img from "./clothe6.jpg";
import p7_img from "./clothe7.jpg";
import p8_img from "./clothe8.jpg";
import p9_img from "./clothe9.jpg";
import p10_img from "./clothe10.jpg";
import p11_img from "./jewellery1.jpg";
import p12_img from "./jewellery2.jpg";
import p13_img from "./jewellery3.jpg";
import p14_img from "./jewellery4.jpg";
import p15_img from "./jewellery5.jpg";
import p16_img from "./jewellery6.jpg";
import p17_img from "./jewellery7.jpg";
import p18_img from "./jewellery8.jpg";
import p19_img from "./jewellery9.jpg";
import p20_img from "./jewellery10.jpg";
import p21_img from "./craft1.jpg";
import p22_img from "./craft2.jpg";
import p23_img from "./craft3.jpg";
import p24_img from "./craft4.jpg";
import p25_img from "./craft5.jpg";
import p26_img from "./craft6.jpg";
import p27_img from "./craft7.jpg";
import p28_img from "./craft8.jpg";
import p29_img from "./craft9.jpg";
import p30_img from "./craft10.jpg";
import p31_img from "./decortive1.jpg";
import p32_img from "./decortive2.jpg";
import p33_img from "./decortive3.jpg";
import p34_img from "./decortive4.jpg";
import p35_img from "./decortive5.jpg";
import p36_img from "./decortive6.jpg";
import p37_img from "./decortive7.jpg";
import p38_img from "./decortive8.jpg";
import p39_img from "./decortive9.jpg";
import p40_img from "./decortive10.jpg";

let all_product = [
  {
    id: 1,
    name: "Hand Knit Summer Cardigan",
    category: "clothes",
    image: p1_img,
    new_price: 500.0,
    old_price: 800.0,
  },
  {
    id: 2,
    name: "Reversible hand block print quilted jacket",
    category: "clothes",
    image: p2_img,
    new_price: 850.0,
    old_price: 1200.0,
  },
  {
    id: 3,
    name: "Indian Handmade patchwork vintage quilted jacket",
    category: "clothes",
    image: p3_img,
    new_price: 600.0,
    old_price: 1000.0,
  },
  {
    id: 4,
    name: "Brown Fuzz Hand Knitted Random Pattern Sweater",
    category: "clothes",
    image: p4_img,
    new_price: 700.0,
    old_price: 1000.0,
  },
  {
    id: 5,
    name: "Givenchy Sport Hand Crochet Black & White Strip Sweater",
    category: "clothes",
    image: p5_img,
    new_price: 850.0,
    old_price: 1200.0,
  },
  {
    id: 6,
    name: "Shoreline Tie Dye Travel/Lounge Set",
    category: "clothes",
    image: p6_img,
    new_price: 850.0,
    old_price: 1200.0,
  },
  {
    id: 7,
    name: "Organic 100% yak wool rib bed socks",
    category: "clothes",
    image: p7_img,
    new_price: 500.0,
    old_price: 700.0,
  },
  {
    id: 8,
    name: "Nordbury Ladies Italian Stretch Plain Cargo Pants",
    category: "clothes",
    image: p8_img,
    new_price: 1200.0,
    old_price: 1500.0,
  },
  {
    id: 9,
    name: "White and maroon Crochet top",
    category: "clothes",
    image: p9_img,
    new_price: 400.0,
    old_price: 500.0,
  },
  {
    id: 10,
    name: "Blue sunflower cardigan",
    category: "clothes",
    image: p10_img,
    new_price: 450.0,
    old_price: 600.0,
  },
  {
    id: 11,
    name: "Polymer Clay Heart Earrings",
    category: "jewellery",
    image: p11_img,
    new_price: 250.0,
    old_price: 300.0,
  },
  {
    id: 12,
    name: "Twist & shout Clay Round Earrinngs",
    category: "jewellery",
    image: p12_img,
    new_price: 100.0,
    old_price: 120.0,
  },
  {
    id: 13,
    name: "Flower bracelet",
    category: "jewellery",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.0,
  },
  {
    id: 14,
    name: "Flower charm two bracelets",
    category: "jewellery",
    image: p14_img,
    new_price: 200.0,
    old_price: 350.0,
  },
  {
    id: 15,
    name: "White Flower charm necklace",
    category: "jewellery",
    image: p15_img,
    new_price: 100.0,
    old_price: 120.0,
  },
  {
    id: 16,
    name: "Nature inspired clay earrings",
    category: "jewellery",
    image: p16_img,
    new_price: 120.0,
    old_price: 150.0,
  },
  {
    id: 17,
    name: "Daisy Blue and White beaded flower bracelet",
    category: "jewellery",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.0,
  },
  {
    id: 18,
    name: "Daisy colurful beaded flower bracelet",
    category: "jewellery",
    image: p18_img,
    new_price: 80.0,
    old_price: 130.0,
  },
  {
    id: 19,
    name: "Micky Mouse Crochet Earrings",
    category: "jewellery",
    image: p19_img,
    new_price: 200.0,
    old_price: 350.0,
  },
  {
    id: 20,
    name: "Mandala Crochet Earrings",
    category: "jewellery",
    image: p20_img,
    new_price: 200.0,
    old_price: 350.0,
  },
  {
    id: 21,
    name: "Cute little Panda, Turtle & Cat made with crochet",
    category: "crafts",
    image: p21_img,
    new_price: 300.0,
    old_price: 500.0,
  },
  {
    id: 22,
    name: "Handmade crochet flowers",
    category: "crafts",
    image: p22_img,
    new_price: 700.0,
    old_price: 1000.0,
  },
  {
    id: 23,
    name: "Dachshund papercraft model",
    category: "crafts",
    image: p23_img,
    new_price: 100.0,
    old_price: 120.0,
  },
  {
    id: 24,
    name: "Plant Embroidery kit",
    category: "crafts",
    image: p24_img,
    new_price: 715.0,
    old_price: 1050.0,
  },
  {
    id: 25,
    name: "Punch Needle starter kit",
    category: "crafts",
    image: p25_img,
    new_price: 1400.0,
    old_price: 1900.0,
  },
  {
    id: 26,
    name: "Llama Felt Craft Kit",
    category: "crafts",
    image: p26_img,
    new_price: 850.0,
    old_price: 1200.0,
  },
  {
    id: 27,
    name: "Crochet flower Steering Wheel Cover",
    category: "crafts",
    image: p27_img,
    new_price: 850.0,
    old_price: 1170.0,
  },
  {
    id: 28,
    name: "Miniturer Paper Boat Craft",
    category: "crafts",
    image: p28_img,
    new_price: 850.0,
    old_price: 1000.0,
  },
  {
    id: 29,
    name: "50 Mix Plants Wooden Craft",
    category: "crafts",
    image: p29_img,
    new_price: 1430.0,
    old_price: 1500.0,
  },
  {
    id: 30,
    name: "handcrafted Fire truck made from wood",
    category: "crafts",
    image: p30_img,
    new_price: 1000.0,
    old_price: 1200.0,
  },
  {
    id: 31,
    name: "Leaf-shaped mirror pieces set within pink piping patterns Bottle",
    category: "decoratives",
    image: p31_img,
    new_price: 250.0,
    old_price: 300.0,
  },
  {
    id: 32,
    name: "Metal bicycle wheel frame with floral decorations",
    category: "decoratives",
    image: p32_img,
    new_price: 850.0,
    old_price: 1000.0,
  },
  {
    id: 33,
    name: "Hanging Decorative Vase Arrangement",
    category: "decoratives",
    image: p33_img,
    new_price: 450.0,
    old_price: 600.0,
  },
  {
    id: 34,
    name: "Decorative round MirrorWall ",
    category: "decoratives",
    image: p34_img,
    new_price: 1000.0,
    old_price: 2000.0,
  },
  {
    id: 35,
    name: "Peacock-themed design Decorative Bottle",
    category: "decoratives",
    image: p35_img,
    new_price: 250.0,
    old_price: 450.5,
  },
  {
    id: 36,
    name: "Decorative Round Mirror and Table",
    category: "decoratives",
    image: p36_img,
    new_price: 2500.0,
    old_price: 3000.0,
  },
  {
    id: 37,
    name: "Decorative Photo Display",
    category: "decoratives",
    image: p37_img,
    new_price: 400.0,
    old_price: 600.0,
  },
  {
    id: 38,
    name: "Multi-cup feeder with colorful cans",
    category: "decoratives",
    image: p38_img,
    new_price: 400.0,
    old_price: 800.0,
  },
  {
    id: 39,
    name: "Girl Character-shaped planter ",
    category: "decoratives",
    image: p39_img,
    new_price: 150.0,
    old_price: 200.0,
  },
  {
    id: 40,
    name: "Decorative Table Lamp",
    category: "decoratives",
    image: p40_img,
    new_price: 500.0,
    old_price: 700.0,
  },

];

export default all_product;
