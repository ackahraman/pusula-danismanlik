import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex shrink-0" aria-label="Pusula">
            <Image src="/images/headLogo.png" alt="pusula Logo" height={50} width={300} />
        </Link>
    );
}
