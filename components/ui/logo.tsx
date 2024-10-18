import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex shrink-0" aria-label="Pusula">
            <img src="/images/headLogo.png"
                   alt="pusula Logo"
                   height={50}
                   width={300}
            />
        </Link>
    );
}
