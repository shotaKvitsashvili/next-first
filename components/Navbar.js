import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <h1>
                    <Link href="/">
                        <div>
                            <Image src="/vercel.svg" width={128} height={77} alt="logo" />
                        </div>
                    </Link>
                </h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninjas</Link>
        </nav>
    );
}

export default Nav;
