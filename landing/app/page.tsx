import { acme } from '@/ui/fonts';


export default function Home() {
  return (
    <main className={`${acme.className} flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className='text-5xl'>DevOps Demo.</div>
    </main>
  )
}
