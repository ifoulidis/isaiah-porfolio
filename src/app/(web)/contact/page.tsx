import ContactForm from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="relative max-w-6xl mx-auto px-5 animate-fade-in delay-1000 opacity-0 duration-500">
      <article className="mb-32 py-5 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </article>
    </div>
  );
}
