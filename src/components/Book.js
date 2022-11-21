import React from "react";
import bookBtn from '../assets/bookImg.png'

const Book = (props) => {
    return (
        <>
            <div>
                <button>
                    <img src={bookBtn} />
                </button>
            </div>
        </>
    );
};
export default Book;