import React from "react";
import "./index.css";

function Content(props) {

    function funMap(arrValue, index) {

        return (
            <>
                <button className="cross" title="Delete" onClick="delete_item">&#xd7;</button><span> {arrValue} </span>
                <br />
            </>

        );
    }

    return (
        <>

            <section id="child2">

                {props.Final.map(funMap)}

            </section>

        </>
    );
}

export default Content;