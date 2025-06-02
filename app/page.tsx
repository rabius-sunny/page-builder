import Link from 'next/link'

type TProps = {}

export default function Page({}: TProps) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1 className='text-4xl font-medium text-emerald-500'>
        Welcome to page builder, a wp industry killer! 💪😤
      </h1>
      <Link href='/dashboard'></Link>
    </div>
  )
}
