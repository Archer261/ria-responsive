import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Wellness FAQs",
    rows: [
        {
            title: "Top 5 Clinically Proven Benefits of Massage",
            content: `Boost Immune System. Many studies have linked massages to improved functioning of the immune system.`,
        },
        {
            title: "Best type of massage for injuries due to repetitive muscle use?",
            content:
                "Sports massage is a good option if you have an injury from repetitive muscle use.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `This type of massage may also help improve flexibility and sports performance, and reduce your risk for injury.`,
        },
    ],
};

const styles = {
    titleTextColor: "#5c3738",
    rowTitleColor: "#5c3738",
    titleTextSize: '50px',
    rowContentPaddingLeft: '10px',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};



function FAQ() {

    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            setTimeout(() => {
                rows[0].scrollIntoView();
                // rows[0].scrollIntoView(true);
            }, 10000);
        }
    }, [rows]);

    return (
        <div>
            <Faq data={data} styles={styles} getRowOptions={setRowsOption} />

        </div>
    );
}

export default FAQ