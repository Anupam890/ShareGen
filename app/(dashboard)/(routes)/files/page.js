import React from 'react'
import { UserButton } from '@clerk/nextjs'
function Files() {
  return (
    <div>
      <h2>Files</h2>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Files
