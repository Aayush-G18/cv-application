import CustomForm from "@/components/customForm"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react'

function ComplexForm({ className }) {
  return (
    <Accordion className={className} type="multiple" collapsible>
      <AccordionItem value="item-1">
    <AccordionTrigger>Personal Info</AccordionTrigger>
        <AccordionContent>
          <CustomForm topic="personal"/>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Experience</AccordionTrigger>
        <AccordionContent>
          <CustomForm topic="experience"/>
        </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Education</AccordionTrigger>
    <AccordionContent>
      <CustomForm topic="education"/>
    </AccordionContent>
      </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Skills</AccordionTrigger>
    <AccordionContent>
      <CustomForm topic="skills"/>
    </AccordionContent>
  </AccordionItem>    
</Accordion>
  )
}

export default ComplexForm