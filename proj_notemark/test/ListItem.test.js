import React from "react";
import { expect } from "chai";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import { shallow, mount } from "Enzyme";

describe ("Test List", () => {
    const data = [
        {
            "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            "title": "hello",
            "content": "# test markdown",
            "time": "1458030208359"
        },
        {
            "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            "title": "hello, test",
            "content": "# test markdown2",
            "time": "1458030208359"
        }
    ];

    it ("test", () => {
        let list = shallow(<List items={data} />);

        expect(list.find(ListItem).length).to.equal(data.length);
    })
})