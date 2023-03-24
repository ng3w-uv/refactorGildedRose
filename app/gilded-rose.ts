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

let itemIsNotUnique = (x) =>
  !x.name.includes(agedBrie) &&
  !x.name.includes(backstagePasses) &&
  !x.name.includes(sulfuras);

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

let sellInDateLessThanEqualtoZero = (x) => x.sellIn <= 0;

let sellInDateLessThanEqualToTenButGreaterThanFive = (x) => x.sellIn <=10 && x.sellIn > 5;

let sellInDateLessThanEqualToFiveButGreaterThanZero = (x) => x.sellIn <=5 && x.sellIn > 0;
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      if (itemIsNotUnique(item)) {
        sellInDateLessThanEqualtoZero(item) ? doubleQualityDecrement(item) : singleQualityDecrement(item);
        singleSellInDecrement(item);
      } 
      else if (itemIsAgedBrie(item)) {
        sellInDateLessThanEqualtoZero(item) ? doubleQualityIncrement(item) : singleQualityIncrement(item);
        singleSellInDecrement(item);
      } 
      else if (itemIsBackstagePasses(item)) {
        if (sellInDateLessThanEqualtoZero(item)) item.quality = 0;
        else if (sellInDateLessThanEqualToTenButGreaterThanFive(item))
          doubleQualityIncrement(item);
        else if (sellInDateLessThanEqualToFiveButGreaterThanZero(item))
          trippleQualityIncrement(item);
        else singleQualityIncrement(item);
        singleSellInDecrement(item);
      }
    });

    return this.items;
  }
}
