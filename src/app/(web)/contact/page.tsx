import ContactForm from "@/components/contact";
import { Suspense } from "react";

export default function ContactPage() {
	return (
		<div className="relative max-w-6xl mx-auto px-5 animate-fade-in delay-1000 opacity-0 duration-500">
			<article className="py-5 md:py-24">
				<div className="max-w-2xl md:mx-auto">
					<Suspense>
						<ContactForm />
					</Suspense>
				</div>
			</article>
		</div>
	);
}
