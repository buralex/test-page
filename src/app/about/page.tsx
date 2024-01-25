"use client";
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
    router.push("/");
  };
  return (
    <div>
      <h1>About</h1>
      <p>Now you are on the About page!</p>
      <p>
        Go back to the page.
        <br />
        <div>
          <a href="/" onClick={handleClick}>
            Home push
          </a>
        </div>
        <Link href="/">Home</Link>
        <br />
        <Link href="/test-page">Index</Link>
        <br />
        <Link href="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default About;
