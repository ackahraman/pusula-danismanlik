export const metadata = {
    title: "Pusula Danışmanlık",
    description: "İş Güvenliği ve İş Güvenliği Eğitimi",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/compass-home";
import Workflows from "@/components/work-flows";

export default function Home() {
    return (
        <>
            <PageIllustration />
            <Hero />
            <Workflows />
        </>
    );
}
