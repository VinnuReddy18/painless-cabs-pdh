'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IntroAnimation } from "@/components/ui/intro-animation"
import { ChevronDown, Leaf, Users, DollarSign, Car, Clock, Zap, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Cover } from "@/components/ui/cover"
import { SpeedometerNav } from "@/components/SpeedometerNav"



export function LandingPageComponent() {
  const [showContent, setShowContent] = useState(false)

  const handleAnimationComplete = () => {
    setShowContent(true)
  }

  return (
    <>
      <IntroAnimation onAnimationComplete={handleAnimationComplete} />
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-gray-900 via-white-900 to-slate-900"
          >
            <SpeedometerNav />
            
            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/bg.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative z-10 text-center">
                <motion.h1
                  className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-blue-300">Welcome to<br></br></span>{' '}
                  <Cover>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                      Painless Cabs
                    </span>
                  </Cover>
                </motion.h1>
                <motion.p
                  className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Where Convenience Meets Sustainability
                </motion.p>
                <motion.p
                  className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We&apos;re revolutionizing the cab experience with eco-friendly electric vehicles, offering a smooth, quiet ride while reducing our carbon footprint.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-gray-900 font-bold shadow-lg text-lg px-8 py-4">
                    Experience Luxury
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="w-12 h-12 text-blue-400 drop-shadow-md" />
              </motion.div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-5xl font-bold text-center mb-16 text-black bg-clip-text bg-gradient-to-r from-white-400 to-pink-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Our Mission: Driving Towards a Greener Future
                </motion.h2>
                <div className="flex flex-wrap -mx-4">
                  <motion.div
                    className="w-full md:w-1/2 px-4 mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-full bg-black from-white-800 to-black-900 rounded-lg p-8 flex flex-col justify-center shadow-xl border border-white-500">
                      <Leaf className="w-20 h-20 text-green-400 mb-6" />
                      <h3 className="text-3xl font-semibold mb-4 text-white">Eco-Friendly Fleet</h3>
                      <p className="text-white text-lg">
                        Our electric vehicles ensure every ride is energy-efficient and emission-free, contributing to a cleaner planet and a sustainable future.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full md:w-1/2 px-4 mb-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-full bg-black rounded-lg p-8 flex flex-col justify-center shadow-xl border border-white">
                      <Users className="w-20 h-20 text-blue-400 mb-6" />
                      <h3 className="text-3xl font-semibold mb-4 text-white">Human-Centric Approach</h3>
                      <p className="text-slate-200 text-lg">
                        We&apos;re committed to making transportation simple and sustainable while prioritizing the well-being of our drivers and passengers.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Driver Empowerment Section */}
            <section id="drivers" className="py-20 bg-black">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Empowering Our Drivers
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <FeatureCard
                    icon={<DollarSign className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Fair Wages"
                    description="We ensure our drivers receive competitive compensation for their valuable service."
                  />
                  <FeatureCard
                    icon={<Clock className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Flexible Hours"
                    description="Our drivers enjoy the freedom to choose their work hours, promoting a healthy work-life balance."
                  />
                  <FeatureCard
                    icon={<Car className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Easy Maintenance"
                    description="Our EV fleet is cost-effective and simple to maintain, reducing stress for our drivers."
                  />
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-us" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Why Choose Painless Cabs?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <FeatureCard
                    icon={<Zap className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Eco-Friendly Rides"
                    description="Enjoy the comfort of modern EVs while contributing to a cleaner environment."
                  />
                  <FeatureCard
                    icon={<Users className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Driver-Centric Approach"
                    description="We prioritize the well-being of our drivers, ensuring a positive experience for all."
                  />
                  <FeatureCard
                    icon={<Globe className="w-16 h-16 text-blue-400 mb-6" />}
                    title="Affordable & Convenient"
                    description="Competitive pricing and easy-to-book services make every ride a pleasant experience."
                  />
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
              <div className="container mx-auto px-4 text-center">
                <motion.h2
                  className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Join Us On The Road to a Better Future
                </motion.h2>
                <motion.p
                  className="text-2xl mb-12 text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Experience the difference of a company that puts people and the planet first.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-gray-900 font-bold shadow-lg text-lg px-8 py-4">
                    Book a Ride
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-bold shadow-lg text-lg px-8 py-4">
                    Become a Driver
                  </Button>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 flex flex-col items-center text-center shadow-xl border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h3>
      <p className="text-gray-300 text-lg">{description}</p>
    </motion.div>
  )
}
