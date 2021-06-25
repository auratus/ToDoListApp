import React, { useState } from "react";
import Content from "./Content.jsx";
import "./index.css";

function ToDoApp() {

    let [current, newData] = useState();
    let [currFinal, newFinal] = useState([])

    function input_data(data) {

        newData(data.target.value);
    }


    function show_list() {

        newFinal((preval) => {
            return [
                ...preval,
                current
            ];
        });

        //to empty the input field after every click
        newData('');

    }


    //to stop the page from reloading on form submission
    function preventD(event) {
        event.preventDefault();
    }



    return (

        <>

            <main id="main">

                <section id="child0"><h1 id="head">ToDo List App</h1></section>
                <form id="child1" onSubmit={preventD}>
                    <input type="text" id="input" placeholder="New Task" onChange={input_data}
                        value={current} />
                    <button type="submit" id="button" onClick={show_list}>ADD</button>
                </form>


                <Content Final={currFinal} />


            </main>



        </>
    );
}

export default ToDoApp;