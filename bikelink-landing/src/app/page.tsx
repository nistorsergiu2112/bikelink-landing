'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Wrench, 
  Clock, 
  CheckCircle, 
  Mail, 
  Phone, 
  Instagram,
  ArrowRight,
  Settings,
  Bike
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/10 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bike className="h-8 w-8 text-accent" />
              <Settings className="h-4 w-4 text-primary absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-primary">BikeLink</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#notify"
            className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Get Notified
          </motion.a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-accent/20"
                />
                <div className="bg-primary p-6 rounded-full">
                  <Bike className="h-16 w-16 text-accent" />
                  <MapPin className="h-8 w-8 text-accent absolute -bottom-2 -right-2 bg-primary rounded-full p-1" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              BikeLink
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
              Powering Local Bike Repair. Seamlessly.
            </p>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              The future of motorcycle maintenance is here. Find trusted garages, 
              book services instantly, and track repairs in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-accent/10 text-accent px-6 py-3 rounded-full font-medium">
              <Clock className="h-5 w-5 mr-2" />
              Coming Soon - App launching in 2024
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative max-w-md mx-auto"
          >
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl">
              <div className="bg-background rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Find Garages</span>
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                      <span className="text-sm text-primary">Mike's Motorcycles</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-sm text-primary">Speed Garage</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-accent text-white py-3 rounded-lg font-medium"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Book in Seconds - Coming Soon!
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              We're building the most intuitive way to connect with trusted motorcycle mechanics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Find Nearby",
                description: "Discover trusted garages in your area with our map-based interface"
              },
              {
                icon: Wrench,
                title: "Book Instantly",
                description: "Schedule repairs and services with just a few taps"
              },
              {
                icon: Clock,
                title: "Track Progress",
                description: "Get real-time updates on your bike's service status"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-background transition-colors"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section id="notify" className="py-16 px-4 bg-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join our waitlist and get early access when we launch
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-accent text-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center justify-center"
              >
                {isSubmitted ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <>
                    Notify Me
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-medium mt-4"
              >
                Thanks! We'll be in touch soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-primary/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="relative">
                <Bike className="h-8 w-8 text-accent" />
                <Settings className="h-4 w-4 text-primary absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-primary">BikeLink</span>
            </div>

            <p className="text-secondary mb-6 max-w-md mx-auto">
              Revolutionizing motorcycle maintenance across the UK. 
              Stay tuned for our launch!
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:hello@bikelink.co"
                className="text-primary hover:text-accent transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com/bikelink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </div>

            <div className="border-t border-primary/10 pt-6">
              <p className="text-secondary text-sm">
                © 2024 BikeLink. All rights reserved. | 
                <span className="text-accent font-medium"> Coming Soon to bikelink.co</span>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
