import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'
import { useForm } from "react-hook-form"

function ComplexForm({ className }) {
  const form=useForm
  return (
    <Accordion className={className} type="multiple" collapsible>
      <AccordionItem value="item-1">
    <AccordionTrigger>Personal Info</AccordionTrigger>
    <AccordionContent>
     Aayush Goyal
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Experience</AccordionTrigger>
    <AccordionContent>
     Internship at Hectronics India
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Education</AccordionTrigger>
    <AccordionContent>
      Btech in CSE
    </AccordionContent>
      </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Skills</AccordionTrigger>
    <AccordionContent>
      ShadCn,Tailwind,React,NextJs
    </AccordionContent>
  </AccordionItem>    
</Accordion>
  )
}

export default ComplexForm