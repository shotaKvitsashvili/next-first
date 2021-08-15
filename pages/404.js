import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);
    return (
        <div>
            <h1>Bro im just 404 wtf</h1>
            <Link href="/">
                Go back to your mfing homepage
            </Link>
        </div>
    );
}

export default NotFound;
