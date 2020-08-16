import Link from 'next/link'
import { Button, Image } from 'semantic-ui-react'

import { ISomeUserInfo } from '../../../types/advertisement/types'

import styles from './detail.module.sass'

export const UserInfo = (userInfo: ISomeUserInfo) => {
  return (
    <div className={styles.user_info_wrapper}>
      <div className={styles.header}>
        <h3>User</h3>
        <Image src={userInfo.avatar} />
        <Link href="/profile/[id]" as={`/profile/${userInfo.id}`}>
          <a><h2>{userInfo.fullname}</h2></a>
        </Link>
      </div>

      <Button primary>Write to the User</Button>

      <div className={styles.description}>
        <p>Phone: {userInfo.phone}</p>
        <p>Location: {userInfo.location}</p>
      </div>
    </div>
  )
}