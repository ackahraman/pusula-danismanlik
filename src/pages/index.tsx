import React from 'react';
import PageIllustration from "../components/page-illustration";
import CompassHome from "../components/compass-home";
import Workflows from "../components/work-flows";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

export const metadata = {
    title: "Pusula Danışmanlık",
    description: "İş Güvenliği ve İş Güvenliği Eğitimi",
};

const Index = () => {
    return (
        <>
            <Header/>
            <PageIllustration/>
            <CompassHome/>
            <Workflows/>
            <Footer/>
        </>
    );
};

export default Index;