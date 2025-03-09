import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Element } from "react-scroll"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  name: string
  children: ReactNode
}

export default function AnimatedSection({ name, children }: AnimatedSectionProps) {
  return (
    <Element name={name} className={cn("section")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="container mx-auto px-4 py-10"
      >
        {children}
      </motion.div>
    </Element>
  )
} 