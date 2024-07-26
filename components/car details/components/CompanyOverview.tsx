import Link from 'next/link'
import React from 'react'
import { ITesla } from '@/data/common'

type Props = Pick<ITesla, 'companyDescription' | 'companyLink'>;

const CompanyOverview = ({companyDescription, companyLink}: Props) => {
  return (
    <div className='flex flex-col space-y-8 py-6'>
      <h4>
       {companyDescription}
      </h4>
      <Link href={companyLink.link} className='text-blue-800 underline'>
        {companyLink.text}
      </Link>
    </div>
  )
}

export default CompanyOverview;
