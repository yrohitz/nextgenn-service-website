import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { createCallback } from "../api/callback.api";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Printer Repair");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !service) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill all required fields.",
      });
      return;
    }

    try {
      setLoading(true);

      await createCallback({
        name,
        phone,
        service,
        message,
      });

      toast({
        title: "🎉 Callback Request Submitted",
        description: "We'll contact you shortly.",
      });

      setName("");
      setPhone("");
      setService("Printer Repair");
      setMessage("");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Left Side */}

          <div className="w-full lg:w-5/12 p-10 md:p-16 flex flex-col justify-center bg-primary text-white">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get expert help today
            </h2>

            <p className="text-xl text-white/90 mb-12 italic">
              "We'll come to you!"
            </p>

            <div className="space-y-8">

              <a
                href="tel:9491873010"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">
                    Call Us 24/7
                  </p>

                  <p className="text-2xl font-bold">
                    9491873010
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919491873010"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">
                    WhatsApp Us
                  </p>

                  <p className="text-xl font-medium">
                    +91 9491873010
                  </p>
                </div>
              </a>

              <a
                href="mailto:nextgenntechnologies.hyd@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-colors">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">
                    Email Us
                  </p>

                  <p className="text-base font-medium break-all">
                    nextgenntechnologies.hyd@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">
                    Service Area
                  </p>

                  <p className="text-lg font-bold">
                    HYDERABAD / SECUNDERABAD
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="w-full lg:w-7/12 p-10 md:p-16 bg-slate-900 flex flex-col justify-center">

            <h3 className="text-2xl font-bold text-white mb-8">
              Request a Callback
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your number"
                  />
                </div>

              </div>

              <div>

                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Service Needed
                </label>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                >
                  <option>Printer Repair</option>
                  <option>Laptop Repair</option>
                  <option>Cartridge Refilling</option>
                  <option>Buy New Device</option>
                  <option>Other Enquiry</option>
                </select>

              </div>

              <div>

                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Message (Optional)
                </label>

                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe your issue..."
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}