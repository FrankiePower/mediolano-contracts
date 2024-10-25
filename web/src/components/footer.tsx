import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Book, Coins, FileCheck, ListChecks, ShieldCheck, Wallet2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Mediolano.app</h2>
            <p className="text-muted-foreground">Revolutionizing intellectual property management with blockchain technology. Powered by Starknet.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dapp Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="flex items-center hover:underline"><FileCheck className="w-4 h-4 mr-2" /> Register</Link></li>
              <li><Link href="#" className="flex items-center hover:underline"><Coins className="w-4 h-4 mr-2" /> Monetize</Link></li>
              <li><Link href="#" className="flex items-center hover:underline"><Wallet2 className="w-4 h-4 mr-2" /> Marketplace</Link></li>
              <li><Link href="#" className="flex items-center hover:underline"><ListChecks className="w-4 h-4 mr-2" /> Listing</Link></li>
              <li><Link href="#" className="flex items-center hover:underline"><ShieldCheck className="w-4 h-4 mr-2" /> License</Link></li>
              <li><Link href="#" className="flex items-center hover:underline"><Book className="w-4 h-4 mr-2" /> Manage</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mediolano</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Team</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">News</Link></li>
              <li><Link href="#" className="hover:underline">Whitepaper</Link></li>
              <li><Link href="#" className="hover:underline">Documentation</Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Input type="email" placeholder="Enter your email" className="max-w-[200px]" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mediolano. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}