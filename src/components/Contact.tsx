"use client"

import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Linkedin,
  Github, Instagram
} from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-blue-200 text-gray-900 py-20 px-6 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold border-b-4 border-blue-800 inline-block pb-2 text-blue-700">
         Get in touch
        </h2>
        <p className="mt-3 text-muted-foreground">
  Have a project or just want to connect? I&apos;d love to hear from you!
</p>

      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info + Social */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">summiyaashraf689@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+92 316 2573083</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <h3 className="font-semibold text-blue-700">Connect with me</h3>
          <div className="flex gap-5 pt-6">
            <a href="https://www.facebook.com/profile.php?id=61553694430220" target="_blank" className="hover:scale-110 transition duration-200">
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>
            <a href="https://x.com/SummiyaAshraf" target="_blank" className="hover:scale-110 transition duration-200">
              <Twitter className="w-6 h-6 text-sky-500" />
            </a>
            <a href="https://www.linkedin.com/in/summiya-ashraf-8249792ba/" target="_blank" className="hover:scale-110 transition duration-200">
              <Linkedin className="w-6 h-6 text-blue-700" />
            </a>
            <a href="" target="_blank" className="hover:scale-110 transition duration-200">
              <Github className="w-6 h-6 text-black" />
            </a>
            <a href="https://www.instagram.com/summiya7127/" target="_blank" className="hover:scale-110 transition duration-200">
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-200 p-8 rounded-2xl shadow-lg space-y-5">
            <h3 className="font-bold text-2xl text-center">Contact</h3>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="p-3 border border-gray-300 rounded-lg w-full" required />
              <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-lg w-full" required />
            </div>
            <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded-lg w-full" required />
            <textarea placeholder="Message" rows={5} className="p-3 border border-gray-300 rounded-lg w-full" required />
            <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
