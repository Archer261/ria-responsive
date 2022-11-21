import React from "react";
import bookBtn from '../assets/bookImg.png'

const Book = (props) => {
    return (
        <>
            <div>
                <button>
                    <a href="https://riastouchmassage.fullslate.com/"><img src={bookBtn} /></a>
                </button>
            </div>
        </>
    );
};
export default Book;