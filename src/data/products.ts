export type Variety = {
  name: string;
  hindi?: string;
  size: string;
  metric: string;
  use: string;
  description: string;
  image: string;
};

export type Occasion = {
  title: string;
  hindi?: string;
  copy: string;
  copyEn?: string;
  image: string;
};

export const varieties: Variety[] = [
  {
    name: "Large Round Food Plate",
    hindi: "बड़ी गोल प्लेट",
    size: '≈ 12–14"',
    metric: "≈ 30–35 cm",
    use: "Full meals & shaadi functions",
    description:
      "Wide stitched leaf plate for carrying rice, dal, sabzi and roti at wedding and function catering.",
    image: "/images/products/round-14in.jpg",
  },
  {
    name: "Medium Round Food Plate",
    hindi: "मध्यम गोल प्लेट",
    size: '≈ 11"',
    metric: "≈ 28 cm",
    use: "Meals & buffet service",
    description:
      "Everyday food-carrying round plate — strong enough for hot Indian meals on the move.",
    image: "/images/products/round-11in.jpg",
  },
  {
    name: "Square Food Plate",
    hindi: "चौकोर प्लेट",
    size: '≈ 7–8"',
    metric: "≈ 18–20 cm",
    use: "Buffet & modern setups",
    description:
      "Square leaf plate with raised rim — easy to hold through buffet lines with sabzi and snacks.",
    image: "/images/products/square-8in.jpg",
  },
  {
    name: "Deep Leaf Bowl",
    hindi: "गहरा बाउल",
    size: '≈ 6"',
    metric: "≈ 15–16 cm",
    use: "Curry, rice & sides",
    description:
      "Deep stitched leaf bowl for kadhi, curry, rice portions and sides without spilling.",
    image: "/images/products/bowl-6in.jpg",
  },
  {
    name: "Dona / Snack Bowl",
    hindi: "दोना कटोरी",
    size: '≈ 6"',
    metric: "≈ 15 cm",
    use: "Prasad, chaat & sweets",
    description:
      "Classic leaf dona for chaat, prasad, mithai and small serving portions at festivals.",
    image: "/images/products/dona-6in.jpg",
  },
];

export const occasions: Occasion[] = [
  {
    title: "Shaadi & Functions",
    hindi: "शादी और समारोह",
    copy: "मंडप से लेकर रिसेप्शन तक — पत्तल प्लेट्स पर पूरा भारतीय भोजन, सैकड़ों मेहमानों के लिए मज़बूत और किफायती।",
    copyEn:
      "From mandap to reception — sturdy leaf plates for full Indian meals, ready for hundreds of baraat guests.",
    image: "/images/occasions/shaadi.jpg",
  },
  {
    title: "Buffet Catering",
    hindi: "बुफे और कैटरिंग",
    copy: "दाल, सब्ज़ी, बिरयानी और रोटी — बुफे लाइन में मेहमान प्लेट लेकर आसानी से आगे बढ़ें।",
    copyEn:
      "Dal, sabzi, biryani and roti — plates that move easily from the catering counter to every guest.",
    image: "/images/occasions/buffet.jpg",
  },
  {
    title: "Festivals & Pooja",
    hindi: "त्योहार और पूजा",
    copy: "प्रसाद, मिठाई और सामुदायिक भोजन के लिए दोना और प्लेट्स — दिवाली, नवरात्रि और मंदिर उत्सवों के लिए।",
    copyEn:
      "Dona bowls and plates for prasad, mithai and community feasts — Diwali, Navratri and temple functions.",
    image: "/images/occasions/festival.jpg",
  },
];
