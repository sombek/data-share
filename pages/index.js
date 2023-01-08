import Layout from "../components/layout/Layout"
import React from "react";
import Slider3 from "../components/slider/Slider3";
import Contact from "./contact";

function Home() {
    return (
        <>
            <Layout>
                <section className="hero-3">
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-3/5 px-3 mb-12 lg:mb-0">
                                <div className="lg:h-128 flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/work-tv.png"
                                         alt="DataShare"/>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/5 px-3">
                                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-right">
                                    <h1 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                        مشاركة

                                        <span className="text-blue-500"> الملفات </span>

                                        عبر الكلاود في السعودية 🇸🇦
                                    </h1>
                                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                        تقدم <strong className="text-blue-500">داتاشير</strong>,
                                        خدمة تخزين ومشاركة الملفات عبر الكلاود بأمان وسهولة

                                    </p>
                                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
                                        تساعدك في تحسين عملك وتوفير الوقت والمال
                                        عبر توفير الخدمات الكاملة للمشاركة والتعامل مع الملفات
                                    </p>
                                </div>
                                <div className="text-center lg:text-right">
                                    <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn"
                                       href="#key-features">
                                        اهم المميزات
                                    </a>
                                    <a className="block sm:inline-block hover-up-2 py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
                                       data-wow-delay=".3s" href="#how-we-work">
                                        كيف نعمل؟
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:pt-20 md:pb-12" id="how-we-work">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-20 text-center">
                            <span
                                className="inline-block text-xs py-1 px-3 text-blue-700 font-semibold bg-blue-100 rounded-xl wow animate__animated animate__fadeIn"
                                data-wow-delay=".5s">
                                كيف نعمل؟
                            </span>
                            <h2 className="my-3 text-3xl md:text-4xl text-blueGray-900 font-bold font-heading wow animate__animated animate__fadeIn"
                                data-wow-delay="0">
                                تستطيع الاستفادة من خدماتنا بسهولة
                            </h2>
                            <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                عن طريق تجربة خدماتنا الكاملة والمجانية
                            </p>
                        </div>
                        <div className="relative max-w-6xl mx-auto wow animate__animated animate__fadeIn"
                             data-wow-delay=".3s">
                            <img src="/assets/imgs/elements/macbook.png" alt="DataShare"/>
                            <div className="absolute"
                                 style={{top: "5.8%", left: "14.6%", width: "72.8%", height: "76.7%"}}>
                                <div className="relative w-full">
                                    <div className="carausel-fade-2 slick-carausel dot-style-1" id="carausel-fade-2-1">
                                        <Slider3/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat"
                         style={{backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')"}} id="key-features">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-12 text-center">
                            <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                                data-wow-delay=".1s">
                                ما يمكن ان نقدمه لك <br/>
                                <span className="text-blue-500">داتاشير</span>
                                تجربة متكاملة للمشاركة والتعامل مع الملفات داخل مؤسستك
                            </h2>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div
                                    className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                                    data-wow-delay=".3s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">مزامنة الملفات</h3>
                                    <p className="text-sm text-blueGray-400">
                                        تنظيم الملفات في مكتبات منفصلة، يمكنك مزامنه الملفات بين الاجهزة
                                        مع اي جهاز تستخدمه
                                        مزامنة الملفات بين الاجهزة تزيد من انتاجيتك
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div
                                    className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                                    data-wow-delay=".5s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading font-bold">تشفير الملفات</h3>
                                    <p className="text-sm text-blueGray-400">
                                        نؤمن بأهمية تشفير الملفات والمعلومات
                                        يتم تشفير الملفات قبل المزامنة مع الخادم. حتى مسؤول النظام لا يمكنه إستعراض
                                        الملفات
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div
                                    className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                                    data-wow-delay=".7s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">آداء عالي</h3>
                                    <p className="text-sm text-blueGray-400">
                                        تصميم النظام ليكون سريعاً ومتعدد الاستخدامات
                                        يمكنك استخدام النظام على اي جهاز تستخدمه

                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                                <div
                                    className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                                    data-wow-delay=".3s">
                                    <div className="text-blue-500 mx-auto mb-4">
                                        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 font-bold font-heading">تشغيل سعودي</h3>
                                    <p className="text-sm text-blueGray-400">
                                        يتم تشغيل خدمات داتاشير بشكل كامل في المملكة العربية السعودية 🇸🇦
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <Contact/>

            </Layout>
        </>
    );
}

export default Home