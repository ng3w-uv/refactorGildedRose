export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const agedBrie = "Aged Brie";
const backstagePasses = "Backstage passes";
const sulfuras = "Sulfuras";

let itemIsNotUnique = (x) => !x.name.includes(agedBrie) && !x.name.includes(backstagePasses) && !x.name.includes(sulfuras);

let itemIsAgedBrie = (x) => x.name.includes(agedBrie);
let itemIsBackstagePasses = (x) => x.name.includes(backstagePasses);
let itemIsSulfuras = (x) => x.name.includes(sulfuras);

let singleSellInDecrement = (x) => (x.sellIn = x.sellIn - 1);

let singleQualityDecrement = (x) => {
  if (x.quality > 0) x.quality = x.quality - 1;
  else x.quality = 0;
};

let doubleQualityDecrement = (x) => {
  if (x.quality > 1) x.quality = x.quality - 2;
  else x.quality = 0;
};

let singleQualityIncrement = (x) => {
  if (x.quality < 50) x.quality = x.quality + 1;
  else x.quality = 50;
};

let doubleQualityIncrement = (x) => {
  if (x.quality < 49) x.quality = x.quality + 2;
  else x.quality = 50;
};

let trippleQualityIncrement = (x) => {
  if (x.quality < 48) x.quality = x.quality + 3;
  else x.quality = 50;
};
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      if (itemIsNotUnique(item)) {
        if (item.sellIn > 0) singleQualityDecrement(item);
        else doubleQualityDecrement(item);
        singleSellInDecrement(item);
      }
    });

    this.items.map((item) => {
      if (itemIsAgedBrie(item)) {
        if (item.sellIn > 0) singleQualityIncrement(item);
        else doubleQualityIncrement(item);
        singleSellInDecrement(item);
      }
    });

    this.items.map((item) => {
      if (itemIsBackstagePasses(item)) {
        if (item.sellIn <= 0) item.quality = 0;
        else if (item.sellIn <= 10 && item.sellIn > 5)
          doubleQualityIncrement(item);
        else if (item.sellIn > 0 && item.sellIn <= 5)
          trippleQualityIncrement(item);
        else singleQualityIncrement(item);
        singleSellInDecrement(item);
      }
    });

    return this.items;
  }
}
