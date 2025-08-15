import AppointmentForm from '@/components/book-appoinment/Book-AppointmentPage'
import HowItWorksSection from '@/components/book-appoinment/How-its-works'
import React from 'react'

export default function page() {
  return (
    <div>
        <HowItWorksSection/>
        <AppointmentForm/>
    </div>
  )
}
