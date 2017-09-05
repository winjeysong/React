import React from "react";
import { expect } from "chai";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import ItemShowLayer from "../components/ItemShowLayer/ItemShowLayer";
import NoteMark from "../components/NoteMark/NoteMark";
import CreateBar from "../components/CreateBar/CreateBar";
import ItemEditor from "../components/ItemEditor/ItemEditor";
import { shallow, mount } from "Enzyme";

describe ("Test the NoteMark", () => {
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

    //对于用户交互操作，如点击或在框内输入，都需要渲染真实的ROM，需要用到mount方法，而不能再用shallow方法渲染生成虚拟DOM
    it("test NoteMark", () => {
        let noteMark = mount(<NoteMark />);
        noteMark.find(".create-bar").simulate("click");  //simulate方法用来模拟事件
        //此时ItemEditor组件应该出现，ItemShowLayer组件应该消失，list内没有内容
        expect(noteMark.find(".item-editor").length).to.equal(1);
        expect(noteMark.find(".item-show-layer").length).to.equal(0);
        expect(noteMark.find(".list").length).to.equal(1);
        //在editor和input中填写测试数据
        let input = noteMark.find("input");
        input.node.value = "new title";
        input.simulate("change", input);
        let textarea = noteMark.find("textarea");
        textarea.node.value = "looks good";
        textarea.simulate("change", textarea);
        //保存
        noteMark.find(".create-save-btn").simulate("click");

        //此时ItemEditor组件应该消失，ItemShowLayer组件应该出现，list内有一条内容
        expect(noteMark.find(".item-editor").length).to.equal(0);
        expect(noteMark.find(".item-show-layer").length).to.equal(1);
        expect(noteMark.find(".list").length).to.equal(1);
        //list的第一个条目应该和上面填写的标题相同
        expect(noteMark.find(".list").first().find(".list-item-title").text()).to.equal("new title");
        //点击第一个条目
        noteMark.find(".list-item-title").first().simulate("click");
        //ItemShowLayer组件h2元素应该有一样的内容
        expect(noteMark.find(".item-show-layer h2").text()).to.equal("new title");
        //点击删除后，list组件应该无内容
        noteMark.find(".delete-btn").simulate("click");
        expect(noteMark.find(".list").length).to.equal(0);
    })
})