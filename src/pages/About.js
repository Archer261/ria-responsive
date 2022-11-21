import React from 'react'
import ria from '../assets/cache_4108695374.png'


function About() {
    return (
        <>

            <div className="hero min-h-min">
                <div className="hero-content flex-col lg:flex-row pl-6">
                    <img src={ria} className="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 className="text-5xl font-bold">Singapore Transplant Becomes Shelby Massage Queen</h1>
                        <p className="py-6 px-6">
                            Ria Schodowski a licensed Massage therapist decided to switch gears and become a massage therapist, she never expected her enterprise to grow so much so quickly. Her massage business, Ria's Touch, has grown tremendously since 2008. In addition to providing massages for clients in her office and on location, Schodowski sells her own line of organic lotions for aromatherapy.

                            Schodowski was attending nursing school until her mother had a stroke in 2008 in Singapore. She immediately went back to her home country and served as the primary caregiver for her mother.

                            While in Singapore, she met a Chinese man who massaged her mother twice a week. Within a couple of weeks of receiving the therapeutic massages, Schodowski's mother's aneu-rysm shrunk from 0.7 to 0.3. Her mother is also a diabetic, so Schodowski helped her change her diet and she believes that diet change and the routine massages helped her mother survive.

                            When Schodowski came back to the United States after caring for her mother, she had a new mission. She became certified in reflexology and began working out of her home in 2008. She quickly gained respect and a large customer base in Shelby. She then decided to open Ria's Touch, which she said is, "a brand that people can identify with."
                        </p>
                        <button className="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;