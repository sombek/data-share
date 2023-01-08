import Head from "next/head";
import React, {useState} from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    const [hiddenClass, setHiddenClass] = useState("hidden");

    const handleHidden = () => setHiddenClass("");

    const handleRemove = () => {
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };

    return (
        <>
            <Head>
                <title>داتا شير</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600&display=swap"
                      rel="stylesheet"/>
                {/*Generate meta info*/}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description"
                      content="تجربة مشاركة ملفات سريعة وآمنة مع خدمتنا. مع واجهة المستخدم المبسطة والميزات المتقدمة، يمكنك بسهولة مشاركة الملفات مع الزملاء والعملاء والأصدقاء. تدعم إجراءات الأمان الحديثة ملفاتك بأمان وخصوصية. ابدأ مشاركة ملفاتك اليوم مع داتاشير"/>
                <meta name="keywords"
                      content="مشاركة الملفات تشغيل سعودي موثوق خدمات سعودية علي بابا كلاود قوقل درايف سعودي"/>

                <meta name="apple-mobile-web-app-status-bar-style" content="#000000"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="google" content="notranslate"/>

                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
                    integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                ></script>
                <script>new WOW().init();</script>
            </Head>


            <div className="main font-body text-body">
                <Header handleHidden={handleHidden}/>
                {children}
                <Footer/>
                <BackToTop/>
            </div>
        </>
    );
};

export default Layout;
