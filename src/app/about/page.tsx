import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Now you are on the About page!</p>
      <p>
        Go back to the
        <h3>
          <Link href="/">Home</Link>
        </h3>
        page.
      </p>
    </div>
  );
};

export default About;
