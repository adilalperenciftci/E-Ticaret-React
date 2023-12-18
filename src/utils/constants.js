import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Anasayfa',
    url: '/E-commerce-React',
  },
  {
    id: 2,
    text: 'Hakkımızda',
    url: '/about',
  },
  {
    id: 3,
    text: 'Ürünler',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Misyonumuz',
    text:
      'Mobilya artık her ev ve her aile için önemli hale geldi. We Mobilya artık her ev ve ailesi için önemli hale geldi. Ürünlere, pazar ihtiyaçlarının karşılanması ve çağa ayak uydurmaya, ürünlere, pazar ihtiyaçlarını karşılamaya ve çağa ayak uydurmaya önem veriyoruz',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Vizyonumuz',
    text:
      'Mobilya alanında dünya çapında tanınmayı sabırsızlıkla beklediğimiz için mobilya konusunda farklı bir vizyonumuz var Mobilya alanında dünya çapında tanınmayı sabırsızlıkla beklediğimiz için mobilya konusunda farklı bir vizyonumuz var',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Geçmişimiz',
    text:
      'Firmamız binlerce yıldır her zaman ön planda olmuş ve mobilya sektöründe en yüksek kalitede seçkinleşmiştir',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
