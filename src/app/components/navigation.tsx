'use client'

import Link from 'next/link'
import type { Session } from '@supabase/auth-helpers-nextjs'

// ナビゲーション
const Navigation = ({ session }: { session: Session | null }) => {
  return (
    <header className='shadow-lg shadow-gray-100'>
      <div className='py-5 container max-w-screen-sm mx-auto flex items-center justify-between'>
        <Link href="/" className='font-bold text-xl cursor-pointer'>
          Clone Dawn SNS
        </Link>

        <div className='text-sm font-bold'>
          {session ? (
            <link href="/settings/profile">
              <div>プロフィール</div>
            </link>
          ) : (
            <div className='flex items-center space-x-5'>
              <Link href="/auth/login">ログイン</Link>
              <Link href="auth/signup">サインアップ</Link>
            </div>
          )}

        </div>
      </div>

    </header>
  )

}

export default Navigation