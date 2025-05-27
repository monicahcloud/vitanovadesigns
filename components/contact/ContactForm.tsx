"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import RippleButton from "../RippleButton";
import ContactHeader from "./ContactHeader";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast(
          <div>
            <p className="font-semibold text-green-800">Success!</p>
            <p className="text-sm text-muted-foreground">
              Your message has been sent.
            </p>
          </div>
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
      } else {
        toast(
          <div>
            <p className="font-semibold text-red-600">Error</p>
            <p className="text-sm text-muted-foreground">
              {data.error || "Failed to send your message."}
            </p>
          </div>
        );
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast(
        <div>
          <p className="font-semibold text-red-600">Unexpected Error</p>
          <p className="text-sm text-muted-foreground">
            Something went wrong. Please try again.
          </p>
        </div>
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="w-full bg-white/10 backdrop-blur-md text-white rounded-3xl p-10 shadow-2xl space-y-6 border border-white/20">
      <ContactHeader />
      {/* Name + Email */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 ">
          <ContactInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <ContactInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Phone + Budget */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ContactInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <ContactInput
            label="Budget"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Textarea */}
      <ContactTextArea
        label="About project..."
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <div className="flex ">
        <Button
          type="submit"
          className="w-full  bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-lg rounded-lg transition-all duration-300 shadow-md">
          Send Message
        </Button>
      </div>

      <div className="text-center pt-6 flex justify-between items-center">
        <p className="text-md text-purple-200">Prefer to book time?</p>
        <a
          href="https://calendly.com/monicahcloud-vitanovadesigns/30min-1"
          target="_blank"
          rel="noopener noreferrer">
          <RippleButton className="mt-3 w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition-all duration-300">
            Book a Free 15-min Call
          </RippleButton>
        </a>
      </div>
    </motion.form>
  );
};

export default ContactForm;
