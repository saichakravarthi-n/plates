export type PlateShape =
  | "round"
  | "square"
  | "compartment"
  | "tray"
  | "boat"
  | "bowl"
  | "oval"
  | "mini";

export type Variety = {
  name: string;
  hindi?: string;
  size: string;
  use: string;
  description: string;
  shape: PlateShape;
  tone: string;
};

export const varieties: Variety[] = [
  {
    name: "Round Food Plate",
    hindi: "गोल प्लेट",
    size: '8" · 10" · 12"',
    use: "Full meals & functions",
    description:
      "Strong leaf plates for carrying rice, dal, sabzi and roti — made for shaadi and function catering.",
    shape: "round",
    tone: "#c4a574",
  },
  {
    name: "Square Food Plate",
    hindi: "चौकोर प्लेट",
    size: '6" · 8" · 10"',
    use: "Modern buffet service",
    description:
      "Easy-to-hold square plates for guests moving through buffet lines with hot Indian food.",
    shape: "square",
    tone: "#b8956a",
  },
  {
    name: "Thali / Partition Plate",
    hindi: "थाली प्लेट",
    size: "3 & 5 section",
    use: "Thali & combo meals",
    description:
      "Separate wells keep curry, rice, pickle and sweets neat while guests carry their plate.",
    shape: "compartment",
    tone: "#a67c52",
  },
  {
    name: "Buffet Serving Tray",
    hindi: "बुफे ट्रे",
    size: "Large platter",
    use: "Buffet counters",
    description:
      "Wide trays for salad, dessert and live-counter service at big Indian buffets.",
    shape: "tray",
    tone: "#c9ad7a",
  },
  {
    name: "Chaat / Snack Boat",
    hindi: "चटपटा बोट",
    size: "Snack size",
    use: "Chaat & starters",
    description:
      "Curved boats for pani puri, bhel, fries and starters — light to carry, neat to serve.",
    shape: "boat",
    tone: "#d4b896",
  },
  {
    name: "Deep Food Bowl",
    hindi: "कटोरी",
    size: "Small · Medium",
    use: "Curry, raita, sweets",
    description:
      "Deep bowls that hold kadhi, raita, payasam and desserts without spilling on the move.",
    shape: "bowl",
    tone: "#b08968",
  },
  {
    name: "Oval Serving Platter",
    hindi: "बड़ा थाल",
    size: "Sharing size",
    use: "Family & community",
    description:
      "Long platters for shared biryani, tandoor items and centre-table serving at gatherings.",
    shape: "oval",
    tone: "#c2a06e",
  },
  {
    name: "Mini Carry Plate",
    hindi: "छोटी प्लेट",
    size: '4" · 6"',
    use: "Prasad & desserts",
    description:
      "Small plates for mithai, prasad, tasting bites and kids’ portions at festivals.",
    shape: "mini",
    tone: "#d8c4a0",
  },
];

export const occasions = [
  {
    title: "Shaadi & Functions",
    copy: "Food-carrying plates for hundreds of guests — sturdy for full Indian meals, compostable after the feast.",
    image:
      "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Buffet Catering",
    copy: "From counter to guest hands — trays and plates built for busy Indian buffet lines.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Festivals & Pooja",
    copy: "Prasad, community meals and outdoor feasts — natural plates for Diwali, Navratri and temple functions.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
  },
];
