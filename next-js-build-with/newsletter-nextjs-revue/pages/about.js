import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">What is Tailwind?</h2>

          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">What is Next.js?</h2>
          <p>
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">What is Revue?</h2>
          <p>
            A free Nesletter service now powered by Twitter.
          </p>
        </section>
      </div>
    </div>
  );
}
