'use client'
import { useRouter } from 'next/navigation'

const Modal = ({ children, bg }) => {
  const router = useRouter();

  return (
    <div>
      <div className={`modal ${bg}`} onClick={() => router.back()} />
      { children }
    </div>
  )
}

export default Modal
