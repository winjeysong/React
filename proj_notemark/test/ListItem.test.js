import React from "react";
import { expect } from "chai";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import ItemShowLayer from "../components/ItemShowLayer/ItemShowLayer";
import { shallow, mount } from "Enzyme";

describe ("Test List", () => {
    const data = [
        {
            "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            "title": "hello",
            "content": "# test markdown",
            "time": 1504192987111
        },
        {
            "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            "title": "hello, test",
            "content": "# test markdown2",
            "time": 1504192987111
        }
    ];

    it ("test List", () => {
        let list = shallow(<List items={data} />);
        expect(list.find(ListItem).length).to.equal(data.length);
    })

    it ("test ListItem", () => {
        let listItem = shallow(<ListItem item={data[0]} />);
        expect(listItem.find(".list-item-title").text()).to.equal(data[0].title);
        expect(listItem.hasClass("list-item-btn")).to.be.true;
    })

    it ("test ItemShowLayer without data", () => {
        let itemShowLayer = shallow(<ItemShowLayer item={null} />);
        expect(itemShowLayer.find(".not-selected").length).to.equal(1);
        expect(itemShowLayer.hasClass("item-show-layer"));
    })

    it("test ItemShowLayer with data", () => {
        let itemShowLayer = shallow(<ItemShowLayer item={data[0]} />);
        expect(itemShowLayer.find("h2").text()).to.equal(data[0].title);
        expect(itemShowLayer.hasClass("item-show-layer"));
    })
})