"use client";
import { basePath } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

// function ActiveLink({ children, href }) {
//   const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'black',
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <a href={href} onClick={handleClick} style={style}>
//       {children}
//     </a>
//   )
// }

// export default ActiveLink

const About = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("__LOG__.cli", `/${basePath}`);

    router.push(`/`);
    // router.push(`/${basePath}`);
  };
  return (
    <div>
      <h1>About</h1>

      <p>
        <div>
          <p style={{ cursor: "pointer" }} onClick={handleClick}>
            Home push 222
          </p>
        </div>
        <Link href="/">Home</Link>
        <br />
        <Link href="/test-page">test-page</Link>
        <br />
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default About;
