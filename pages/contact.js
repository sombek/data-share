import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="relative -mt-24 pt-24">
                <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
                     style={{"z-index": "-1"}}></div>
                <div className="container">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full lg:w-1/2 px-3">
                            <div className="py-12">
                                <div
                                    className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-right">
                                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                        نهتم
                                        <span className="text-blue-500"> لعملائنا </span>
                                        , ونعمل لتقديم أفضل خدمة
                                    </h2>
                                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                        نحن <strong className="text-blue-500">داتاشير</strong>
                                    </p>
                                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                                        نقدم لكم أفضل الخدمات لتحقيق أهدافكم
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                            <div className="flex items-center justify-center">
                                <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Monst"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container" style={{textAlign: 'right'}}>
                    <div className="max-w-2xl mx-auto">
                        <div className="max-w-md mb-8 mx-auto">
                                <span
                                    className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                                    data-wow-delay=".1s">
                                    تواصل معنا
                                </span>
                            <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                                data-wow-delay=".s">
                                <span className="text-blue-500">نسعد </span> بالتواصل معكم
                            </h2>
                        </div>

                        <div className="py-12" style={{textAlign: 'center'}}>
                            <a href="https://wa.me/966595585131" target="_blank">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    اتصل بنا عبر الواتساب
                                </button>
                            </a>
                        </div>


                        <div>
                            <form>
                                <div className="mb-4 wow animate__animatedanimated animate__fadeIn"
                                     data-wow-delay=".3s">
                                    <input
                                        className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                        type="email" placeholder="البريد الإلكتروني"/>
                                </div>
                                <div
                                    className="wow animate__animatedanimated animate__fadeIn"
                                    data-wow-delay=".3s"
                                    style={{textAlign: 'center', width: '100%'}}>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Forward to whatsapp with the data
                                            let email = document.querySelector('input[type="email"]').value;
                                            console.log(email)
                                            let whatsapp_text = "مرحبا اود الإستفسار عن خدمة داتاشير";
                                            if (email) {
                                                whatsapp_text += `
                                                
                                                البريد الإلكتروني: ${email}\n`
                                            }

                                            window.open(`https://wa.me/966595585131?text=${whatsapp_text}`, '_blank');
                                        }}
                                        className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded w-full">
                                        إرسال
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;