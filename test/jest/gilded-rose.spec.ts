import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose Class Assigning", () => {
  /*
  it('testing name assigning', () => {
    const gildedRose = new GildedRose([new Item('test_name_item', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('test_name_item');
  });
  */

    it("testing name", () => {
        const gildedRose = new GildedRose([new Item("test_name_item", 0, 0)]);
        expect(gildedRose.items[0].name).toBe("test_name_item");
    });

    it("testing sellin", () => {
        const gildedRose = new GildedRose([new Item("", 2, 0)]);
        expect(gildedRose.items[0].sellIn).toBe(2);
    });

    it("testing quality", () => {
        const gildedRose = new GildedRose([new Item("", 0, 3)]);
        expect(gildedRose.items[0].quality).toBe(3);
    });
    
});

describe("GildedROse sample tests", () => {

    it('what if the quality provided is negative for a sample item', () => {
        const gildedRose = new GildedRose([new Item("sample_item", 10, -23)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("sample_item");
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(-23);
    });
    
    it('what if the quality provided is negative for Aged Brie /special item', () => {
        const gildedRose = new GildedRose([new Item("Aged Brie", 10, -23)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(-22);
    });

    it("SellIn date has passed quality degrades twice as fast", () => {
        const gildedRose = new GildedRose([new Item("test_item", -1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("test_item");
        expect(items[0].sellIn).toBe(-2);
        expect(items[0].quality).toBe(18);
    });

    it("does the quality goes below 0", () => {
        const gildedRose = new GildedRose([new Item("test_item", -54, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("test_item");
        expect(items[0].sellIn).toBe(-55);
        expect(items[0].quality).toBe(0);
    });

    it("does the quality goes above 50", () => {
        const gildedRose = new GildedRose([new Item("Aged Brie", -54, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(-55);
        expect(items[0].quality).toBe(50);
    });

    it("quality of Aged Brie increasing by two after SellIn date", () => {
        const gildedRose = new GildedRose([new Item("Aged Brie", -54, 25)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(-55);
        expect(items[0].quality).toBe(27);
    });

    it("quality of Aged Brie increasing by one before SellIn date", () => {
        const gildedRose = new GildedRose([new Item("Aged Brie", 10, 25)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(26);
     });  
     
    it('correct assigning of Sulfuras\'s quality and its change even SellIn date does not change', () => {
        const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -10, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
        expect(items[0].sellIn).toBe(-10);
        expect(items[0].quality).toBe(80);
    });

    it('Backstage passes when 10 days or less are left', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 35)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(37);
    });
    
    it('Backstage passes when 5 days or less are left', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(38);
    });
    
    it('Backstage passes when sellIn date is 0', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 35)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });

    
    it('Backstage passes when sellIn date has passed', () => {
        const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", -2, 35)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(-3);
        expect(items[0].quality).toBe(0);
    });
    





});

