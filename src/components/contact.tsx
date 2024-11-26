"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export type FormData = {
	name: string;
	email: string;
	message: string;
	subject: string;
	confirmation: string;
};

export default function ContactForm() {
	const [state, setState] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
		confirmation: "",
	});
	const searchParams = useSearchParams();

	const prefilledSubject = searchParams.get("subject");
	// const subjectParams = useSearchParams();

	// const autoSubject = subjectParams.get("subject");

	useEffect(() => {
		if (state.confirmation) {
			const timer = setTimeout(() => {
				setState({
					name: "",
					email: "",
					subject: "",
					message: "",
					confirmation: "",
				});
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [state]);

	useEffect(() => {
		if (prefilledSubject) {
			setState((prevState) => {
				return { ...prevState, subject: prefilledSubject };
			});
		}
	}, [prefilledSubject]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Configure Email.js parameters
		const templateParams = {
			subject: state.subject,
			user_name: state.name,
			user_email: state.email,
			message: state.message,
		};
		if (state.subject === "") {
			setState((prevState) => {
				return {
					...prevState,
					confirmation: "Subject cannot be blank",
				};
			});
		} else if (state.name === "") {
			setState((prevState) => {
				return { ...prevState, confirmation: "Name cannot be blank" };
			});
		} else if (state.email === "") {
			setState((prevState) => {
				return { ...prevState, confirmation: "Email cannot be blank" };
			});
		} else if (state.message === "") {
			setState((prevState) => {
				return {
					...prevState,
					confirmation: "Message cannot be blank",
				};
			});
		} else {
			// Send the email using Email.js
			emailjs
				.send(
					"service_lx7u87q",
					"contact_form",
					templateParams,
					"eCJbOSpcY59_MuyQm"
				)
				.then((response) => {
					console.log("Email sent!", response.status, response.text);
					setState((prevState) => {
						return {
							...prevState,
							confirmation: "Email sent successfully!",
						};
					});
				})
				.catch((error) => {
					console.error("Error sending email:", error);
					setState((prevState) => {
						return {
							...prevState,
							confirmation:
								"There was an error sending your email! Please refresh the page and try again",
						};
					});
				});
			// Clear form fields
			setState({
				name: "",
				email: "",
				subject: "",
				message: "",
				confirmation: "",
			});
		}
	};

	return (
		<Suspense>
			<div className="relative max-w-6xl md:mx-auto md:px-5 md:py-10 animate-fade-in delay-1000 opacity-0 duration-500">
				<main className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						Get In Touch
					</h1>
					<form onSubmit={handleSubmit} className="space-y-6">
						<input
							type="text"
							placeholder="Full Name"
							value={state.name}
							onChange={(e) =>
								setState((prevState) => {
									return {
										...prevState,
										name: e.target.value,
									};
								})
							}
							required
							className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
						/>
						<input
							type="email"
							placeholder="Email"
							value={state.email}
							onChange={(e) =>
								setState((prevState) => {
									return {
										...prevState,
										email: e.target.value,
									};
								})
							}
							required
							className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
						/>
						<input
							type="text"
							placeholder="Subject"
							value={state.subject}
							onChange={(e) =>
								setState((prevState) => {
									return {
										...prevState,
										subject: e.target.value,
									};
								})
							}
							required
							className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500"
						/>
						<textarea
							placeholder="Message"
							value={state.message}
							onChange={(e) =>
								setState((prevState) => {
									return {
										...prevState,
										message: e.target.value,
									};
								})
							}
							required
							className="w-full p-4 h-[12rem] border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 resize-none"
						></textarea>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="submit"
							className="w-full bg-blue-500 text-white  dark:text-gray-900 p-4 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							Submit
						</motion.button>
					</form>
					{state.confirmation && (
						<h2 className="mt-6 text-lg text-center text-gray-900 dark:text-white">
							{state.confirmation}
						</h2>
					)}
				</main>
			</div>
		</Suspense>
	);
}
