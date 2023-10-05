"use client"
import React from "react"
import styles from './vision.module.scss'
import Image from "next/image"
import clsx from "clsx"
import { VisionSection } from "@/components/VisionSection/VisionSection"
import { uniqueId } from "lodash"
import { PageHeader } from "@/components/PageHeader/PageHeader"
import { Section } from "@/components/Section/Section"
import image1 from '../../../public/images/vision1.jpg'
import image2 from '../../../public/images/vision2.jpg'
import image3 from '../../../public/images/vision3.jpg'

interface IVisionProps {}

const texts = ["Grandma Jazz is passionately dedicated to creating an authentic, local experience in Phuket by fostering a vibrant community built on sustainable practices.", "We aim to be more than just a cafe - we're a place where old traditions meet new insights, where quality is our promise and where everyone is part of the Grandma Jazz family."]

const Vision: React.FC<IVisionProps> = () => {
  return (
    <div className={styles.vision}>
      <PageHeader title="" page="vision"  />

      <Section
        title=""
        text="Grandma Jazz is passionately dedicated to creating an authentic, local experience in Phuket by fostering a vibrant community built on sustainable practices. We aim to be more than just a cafe - we're a place where old traditions meet new insights, where quality is our promise and where everyone is part of the Grandma Jazz family."
        image={image1}
        imageDescription=""
        name='vision'
      />

      <Section
        title="Grandma"
        text="In recognition of every Grandma out there and beyond, who without having done her own thing in life, would not have given us the life we have today. If you think about it, without “Grandma”, none of this is possible."
        image={image2}
        imageDescription=""
        name='flowers'
      />

      <Section
        title="Jazz"
        text="Representing an ensemble of various instruments, each playing their own unique sound and coming together to sing. The people who enter Grandma Jazz, also engage in a space with a variety of people from around our wonderful world. They too, play their own unique sound with this human ensemble. The “Jazz” is the people. We are jazz."
        image={image3}
        imageDescription=""
        name='vibe'
      />
    </div>
  )
}

export default Vision