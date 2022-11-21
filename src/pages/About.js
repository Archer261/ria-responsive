import React from 'react'
import ria from '../assets/cache_4108695374.png'
import { Link } from 'react-router-dom';


function About() {
    return (
        <>
            <div>
                <div className="hero min-h-min overflow-hidden">
                    <div className="hero-content flex-col lg:flex-row pl-6">

                        <div>
                            <h1 className="w-full text-xl sm:text-5xl font-bold">Singapore Transplant Becomes Shelby Massage Queen</h1>
                            <img src={ria} className="float-left mt-10 rounded-lg shadow-2xl mr-5 ml-2 sm:ml-10 w-36 h-auto sm:w-50" />
                            <p className="w-100 pt-2 sm:pt-6 px-2 sm:px-6">
                                Ria Schodowski a licensed Massage therapist decided to switch gears and become a massage therapist, she never expected her enterprise to grow so much so quickly. Her massage business, Ria's Touch, has grown tremendously since 2008. In addition to providing massages for clients in her office and on location, Schodowski sells her own line of organic lotions for aromatherapy.</p>
                            <br />
                            <p className="w-100 py-2 px-2 sm:px-6">
                                Schodowski was attending nursing school until her mother had a stroke in 2008 in Singapore. She immediately went back to her home country and served as the primary caregiver for her mother.
                            </p>
                            <br />
                            <p className="w-100 py-2 px-2 sm:px-6">
                                While in Singapore, she met a Chinese man who massaged her mother twice a week. Within a couple of weeks of receiving the therapeutic massages, Schodowski's mother's aneu-rysm shrunk from 0.7 to 0.3. Her mother is also a diabetic, so Schodowski helped her change her diet and she believes that diet change and the routine massages helped her mother survive.
                            </p>
                            <br />
                            <p className="w-100 py-2 px-2 sm:px-6">
                                When Schodowski came back to the United States after caring for her mother, she had a new mission. She became certified in reflexology and began working out of her home in 2008. She quickly gained respect and a large customer base in Shelby. She then decided to open Ria's Touch, which she said is, "a brand that people can identify with."
                            </p>
                            <p className="w-100 py-2 px-2 sm:px-6">
                                Schodowski became certified in massage therapy and joined the Associated Bodywork and Massage Professionals. She said, "If I can change people's lives in Michigan, I want to do that." Schodowski knows that the American diet of less fiber and more meat, coupled with a sedentary lifestyle, is the reason that older people need to be taken care by their kids. "People don't know how to take care of themselves and self-medicate. People don't understand how much a massage can help you. It helps reduce stress and you can avoid a lot of diseases. You can guarantee your health. Massage therapy can prevent or reduce your risk of being unhealthy. Which would you rather have: to stay healthy or to just stay alive?"

                                Schodowski loves her customers and treats each person like a movie star. She schedules her appointments far apart so she can make sure she devotes enough time to each person. You don't have to feel rushed after your massage. Instead, Schodowski encourages her customers to relax in the comfortable chair in her massage room and take their time to leave. She said, "It is a spa atmosphere, just on a smaller scale. You don't get the high nose of the spa, you get spa service without the weird looks." Schodowski is very concerned that her customers have an experience to remember. "We can guarantee you leave our building refreshed and relaxed. Massage–the ultimate relaxation. My husband came up with it."

                                Schodowski started her own line of lotions that are all organic, all natural ingredients and no preservatives. They are meant to be soothing and calming, and do not get oily or feel greasy. Anyone from babies to adults can use them. Schodowski said, "The climate is always different and these lotions can work for all types of skin. They are organic and eco-friendly. Everything is packaged in tempered glass, so no plastic materials in your system. My lotions have a better shelf life, they are exclusive–not sold in stores–but are still affordable and unique."

                                Lotions include Ego, which has a grapefruit scent; Dreams, which is for those who are tired and sleepless; Happy, which has a lemongrass scent and is great for after the shower on elbows, toes, and knees and Spring Rose, a flowery scent that isn't too pungent. Specials include buy two lotions for $28, buy one $16

                                Schodowski said anyone can use her lotions. "A retired teacher or a businessman doesn't want to smell too flowery. Everyone has a lotion for them. No one is left out."

                                Schodowski also has her own line of shower therapy for sinuses or nasal congestion. The bath tablets can be set in the tub when you take a shower. They release an aroma similar to aromatherapy, but these relax your muscles and soothe your skin as you shower. They can last up to three showers. One tablet is just $8. These are also all organic.  Schodowski said, "Some people use the tablets in closets, cars, rooms with guests,  shower ,offices or cubicles."

                                Schodowski says her organic lotions( lilac, lavender, vanilla, pearberry,coconut, ego, and shower therapy are great gifts . In Michigan, these items are free shipping

                                You can place your order or request a sample of the lotion you like.
                            </p>
                            <Link to={'/contact'}><button className="btn btn-primary">Contact Me</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;