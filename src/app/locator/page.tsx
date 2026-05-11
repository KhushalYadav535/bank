"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { MapPin, Phone, Clock, Search, Building2, Atm, Car, Wheelchair } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "Main Branch",
    address: "MNS Bank Building, Near Old GP, Zone No. 1, Mahasabha Nagar, Bhopal - 462001",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    services: ["All Banking Services", "Cash Counter", "ATM", "Safe Deposit Locker"],
    coordinates: { lat: 23.2599, lng: 77.4126 },
  },
  {
    id: 2,
    name: "Arya Samaj Branch",
    address: "Shop No. 5-6, Arya Samaj Road, Bhopal - 462002",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    services: ["All Banking Services", "Cash Counter", "ATM"],
    coordinates: { lat: 23.2619, lng: 77.4026 },
  },
  {
    id: 3,
    name: "Habib Ganj Branch",
    address: "Near Habib Ganj Railway Station, Bhopal - 462001",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    services: ["All Banking Services", "Cash Counter", "ATM", "Business Banking"],
    coordinates: { lat: 23.2719, lng: 77.4226 },
  },
  {
    id: 4,
    name: "Kolar Road Branch",
    address: "Kolar Road, Bhopal - 462003",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    services: ["All Banking Services", "Cash Counter", "ATM"],
    coordinates: { lat: 23.2419, lng: 77.4326 },
  },
];

const atms = [
  { name: "Main Branch ATM", location: "MNS Bank Building, Bhopal", available: true },
  { name: "Arya Samaj ATM", location: "Arya Samaj Road, Bhopal", available: true },
  { name: "Habib Ganj ATM", location: "Habib Ganj Station, Bhopal", available: true },
  { name: "Kolar Road ATM", location: "Kolar Road, Bhopal", available: true },
  { name: "MP Nagar ATM", location: "MP Nagar, Bhopal", available: true },
  { name: "TT Nagar ATM", location: "TT Nagar, Bhopal", available: true },
];

export default function BranchLocatorPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Find Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Branch & ATM Locator
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Find your nearest MNS Bank branch and ATM. We're always close to you.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Search */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search by branch name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-platinum focus:outline-none focus:ring-2 focus:ring-crimson/20"
            />
          </div>
        </div>
      </section>

      {/* Branch List & Map */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Branch List */}
            <div>
              <SectionHeader
                eyebrow="Branches"
                title="Our Branches"
                subtitle="All MNS Bank branches in Bhopal."
              />

              <div className="mt-6 space-y-4">
                {filteredBranches.map((branch) => (
                  <motion.div
                    key={branch.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => setSelectedBranch(branch)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        selectedBranch.id === branch.id
                          ? "border-crimson bg-crimson/5"
                          : "border-platinum hover:border-crimson/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                          <Building2 className="w-5 h-5 text-crimson" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-charcoal">{branch.name}</h4>
                          <p className="text-muted text-sm mt-1">{branch.address}</p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Branch Details */}
            <div>
              <div className="sticky top-24">
                <AnimatedCard variant="default" className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">
                    {selectedBranch.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-crimson shrink-0 mt-1" />
                      <span className="text-muted">{selectedBranch.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-crimson" />
                      <span className="text-muted">{selectedBranch.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span className="text-muted">{selectedBranch.hours}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-platinum">
                    <p className="text-sm font-medium text-charcoal mb-3">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedBranch.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-platinum rounded-full text-sm text-muted">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-crimson text-white text-center rounded-lg hover:bg-crimson-light transition-colors"
                    >
                      Get Directions
                    </a>
                    <button className="px-4 py-3 border border-crimson text-crimson rounded-lg hover:bg-crimson/5 transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </AnimatedCard>

                {/* Map Placeholder */}
                <div className="mt-4 h-64 bg-platinum rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-crimson mx-auto mb-2" />
                    <p className="text-muted">Map View Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATM List */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="ATMs"
            title "ATM Locations"
            subtitle="Find MNS Bank ATMs across Bhopal."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atms.map((atm, index) => (
              <motion.div
                key={atm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                      <Atm className="w-6 h-6 text-crimson" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-charcoal">{atm.name}</h4>
                      <p className="text-muted text-sm">{atm.location}</p>
                    </div>
                    <span className={`w-3 h-3 rounded-full ${atm.available ? 'bg-green-500' : 'bg-red-500'}`} />
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Accessibility"
            title "Branch Amenities"
            subtitle="Making banking accessible for everyone."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Wheelchair, title: "Wheelchair Access", desc: "All branches are wheelchair accessible" },
              { icon: Car, title: "Parking", desc: "Dedicated parking at all branches" },
              { icon: Atm, title: "24/7 ATM", desc: "All ATMs available round the clock" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 text-center">
                  <item.icon className="w-10 h-10 text-crimson mx-auto mb-4" />
                  <h4 className="font-display font-semibold text-charcoal">{item.title}</h4>
                  <p className="text-muted mt-2">{item.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}