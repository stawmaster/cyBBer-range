import React, { Component, component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    constructor(props){
        super(props);

    }


    render() {
        return <h1> react works </h1>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);